import * as actionTypes from "../actions/actionTypes";
import { updateState } from "../utility/updateState";

const initialState = {
  days: {
    "2018.7.16": {
      confirmedDayOff: ["Uliana", "Oksana"],
      pendingDayOff: ["Yaryna"],
      morningShift: "Oksana",
      sharedInbox: "Yaryna",
      audit: "Nazar",
      colors: {
        morningShift: "yellow",
        sharedInbox: "green",
        audit: "blue"
      }
    },
    "2018.7.18": {
      confirmedDayOff: ["Uliana", "Oksana"],
      pendingDayOff: ["Yaryna", "Nazar", "Oksana"],
      morningShift: "Oksana",
      sharedInbox: "Yaryna",
      audit: "Nazar"
    },
    "2018.7.19": {
      morningShift: "Oksana",
      sharedInbox: "Yaryna",
      audit: "Nazar"
    },
    "2018.7.23": {
      morningShift: "Oksana",
      sharedInbox: "Yaryna",
      audit: "Nazar"
    }
  }
};

const updateDayOff = (state, action) => {
  let days = { ...state.days };
  let idExists = action.payload.id in days;
  let typeExists = idExists && action.payload.type in days[action.payload.id];
  if (typeExists) {
    days[action.payload.id][action.payload.type].push(action.payload.name);
  } else if (idExists) {
    days[action.payload.id][action.payload.type] = [[action.payload.name]];
  } else {
    days[action.payload.id] = {
      [action.payload.type]: [[action.payload.name]]
    };
  }
  return updateState(state, { days });
};

const removeDayOff = (state, action) => {
  let days = { ...state.days };
  const confirmedDayOffExists = "confirmedDayOff" in days[action.id];
  const pendingDayOffExists = "pendingDayOff" in days[action.id];
  if (confirmedDayOffExists) delete days[action.id].confirmedDayOff;
  if (pendingDayOffExists) delete days[action.id].pendingDayOff;
  return updateState(state, { days });
};

const updateSchedule = (state, action) => {
  let days = { ...state.days };
  let { id, type, name } = action.payload;
  for (let i = 0; i < 5; i++) {
    let day = new Date(id.split(".")[0], id.split(".")[1] - 1, id.split(".")[2]);
    day.setDate(day.getDate() + i);
    const currentId = `${day.getFullYear()}.${day.getMonth() + 1}.${day.getDate()}`;
    currentId in days
      ? (days[currentId][type] = name)
      : (days[currentId] = {
          [type]: name
        });
  }
  return updateState(state, { days });
};

const removeSchedule = (state, action) => {
  let days = { ...state.days };
  const colorExists = "colors" in days[action.payload.id] && action.payload.detailType in days[action.payload.id].colors;
  delete days[action.payload.id][action.payload.detailType];
  if (colorExists) delete days[action.payload.id].colors[action.payload.detailType];
  return updateState(state, { days });
};

const setColor = (state, action) => {
  let days = { ...state.days };
  action.chosenMondays.forEach(monday => {
    monday.id in days && "colors" in days[monday.id] && monday.type in days[monday.id].colors
      ? (days[monday.id].colors[monday.type] = action.color)
      : (days[monday.id].colors = {
          ...days[monday.id].colors,
          [monday.type]: action.color
        });
  });
  return updateState(state, { days });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_DAYOFF:
      return updateDayOff(state, action);
    case actionTypes.REMOVE_DAYOFF:
      return removeDayOff(state, action);
    case actionTypes.UPDATE_SCHEDULE:
      return updateSchedule(state, action);
    case actionTypes.REMOVE_SCHEDULE:
      return removeSchedule(state, action);
    case actionTypes.SET_COLOR:
      return setColor(state, action);
    default:
      return state;
  }
};

export default reducer;

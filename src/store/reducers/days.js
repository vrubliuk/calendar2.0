import * as actionTypes from "../actions/actionTypes";
import { updateState } from "../utility/updateState";

const initialState = {
  database: {
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

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_DAYOFF:
      let database = { ...state.database };
      let idExists = action.payload.id in database;
      let typeExists = idExists && action.payload.type in database[action.payload.id];
      if (typeExists) {
        database[action.payload.id][action.payload.type].push(action.payload.name);
      } else if (idExists) {
        database[action.payload.id][action.payload.type] = [[action.payload.name]];
      } else {
        database[action.payload.id] = {
          [action.payload.type]: [[action.payload.name]]
        };
      }
      return updateState(state, {database});
    case actionTypes.REMOVE_DAYOFF:
      database = { ...state.database };
      const confirmedDayOffExists = "confirmedDayOff" in database[action.id];
      const pendingDayOffExists = "pendingDayOff" in database[action.id];
      if (confirmedDayOffExists) delete database[action.id].confirmedDayOff;
      if (pendingDayOffExists) delete database[action.id].pendingDayOff;
      return updateState(state, {database});

    case actionTypes.UPDATE_SCHEDULE:
      database = { ...state.database };
      let { id, type, name } = action.payload;
      for (let i = 0; i < 5; i++) {
        let day = new Date(id.split(".")[0], id.split(".")[1] - 1, id.split(".")[2]);
        day.setDate(day.getDate() + i);
        const currentId = `${day.getFullYear()}.${day.getMonth() + 1}.${day.getDate()}`;
        currentId in database
          ? (database[currentId][type] = name)
          : (database[currentId] = {
              [type]: name
            });
      }
      return updateState(state, {database});
    case actionTypes.REMOVE_SCHEDULE:
      database = { ...state.database };
      const colorExists = "colors" in database[action.payload.id] && action.payload.detailType in database[action.payload.id].colors;
      delete database[action.payload.id][action.payload.detailType];
      if (colorExists) delete database[action.payload.id].colors[action.payload.detailType];
      return updateState(state, {database});

    case actionTypes.SET_COLOR:
      database = { ...state.database };
      // chosenMondays = [...state.chosenMondays];
      action.chosenMondays.forEach(monday => {
        monday.id in database && "colors" in database[monday.id] && monday.type in database[monday.id].colors
          ? (database[monday.id].colors[monday.type] = action.color)
          : (database[monday.id].colors = {
              ...database[monday.id].colors,
              [monday.type]: action.color
            });
      });
      return updateState(state, {database});

    default:
      return state;
  }
};

export default reducer;

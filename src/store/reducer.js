import * as actionTypes from "./actions";

const initialState = {
  authorized: true,
  calendarDate: new Date(),
  editorDate: new Date(),
  hoveredDayId: null,
  database: {
    "2018.7.16": {
      confirmedDayOff: "Uliana",
      pendingDayOff: "Yaryna",
      morningShift: "Oksana",
      sharedInbox: "Yaryna",
      audit: "Nazar"
    },
    "2018.7.18": {
      confirmedDayOff: "Uliana",
      pendingDayOff: "Yaryna",
      morningShift: "Oksana",
      sharedInbox: "Yaryna",
      audit: "Nazar"
    },
    "2018.7.19": {
      confirmedDayOff: "Uliana",
      morningShift: "Oksana",
      sharedInbox: "Yaryna",
      audit: "Nazar"
    },
    "2018.7.3": {
      pendingDayOff: "Yaryna",
      morningShift: "Oksana",
      sharedInbox: "Yaryna",
      audit: "Nazar"
    }
  },
  employees: ["Yaryna", "Oksana", "Uliana", "Nazar"]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PREVIOUS_MONTH:
      return {
        ...state,
        calendarDate: new Date(state.calendarDate.setMonth(state.calendarDate.getMonth() - 1))
      };
    case actionTypes.NEXT_MONTH:
      return {
        ...state,
        calendarDate: new Date(state.calendarDate.setMonth(state.calendarDate.getMonth() + 1))
      };
    case actionTypes.HOVER_DAY:
      return {
        ...state,
        hoveredDayId: action.id
      };
    case actionTypes.PREVIOUS_YEAR:
      return {
        ...state,
        editorDate: new Date(state.editorDate.setFullYear(state.editorDate.getFullYear() - 1))
      };
    case actionTypes.NEXT_YEAR:
      return {
        ...state,
        editorDate: new Date(state.editorDate.setFullYear(state.editorDate.getFullYear() + 1))
      };
    case actionTypes.UPDATE_DETAIL:
      let database = { ...state.database };
      if(action.payload.id in database) {
        database[action.payload.id][action.payload.type] = action.payload.name;
      } else {
        database[action.payload.id] = {
          [action.payload.type]:action.payload.name
        }
      }
      return {
        ...state,
        database
      };
    default:
      return state;
  }
};

export default reducer;

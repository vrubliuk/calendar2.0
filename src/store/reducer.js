import * as actionTypes from "./actions";

const initialState = {
  authorized: true,
  calendarDate: new Date(),
  editorDate: new Date(),
  hoveredDayId: null,
  database: {
    "2018.7.16": {
      confirmedDayOff: ["Uliana", "Oksana"],
      pendingDayOff: ["Yaryna"],
      morningShift: "Oksana",
      sharedInbox: "Yaryna",
      audit: "Nazar",
      colors: {
        morningShift: 'yellow',
        sharedInbox: 'green',
        audit: 'blue'
      }
    },
    "2018.7.18": {
      confirmedDayOff: ["Uliana", "Oksana"],
      pendingDayOff: ["Yaryna", 'Nazar', "Oksana"],
      morningShift: "Oksana",
      sharedInbox: "Yaryna",
      audit: "Nazar"
    },
    "2018.7.19": {
      
      morningShift: "Oksana",
      sharedInbox: "Yaryna",
      audit: "Nazar"
    },
    "2018.7.3": {
      
      morningShift: "Oksana",
      sharedInbox: "Yaryna",
      audit: "Nazar"
    }
  },
  employees: ["Yaryna", "Oksana", "Uliana", "Nazar"],
  colors: {
    white: {
      dark: "#e6e6e6",
      light: "white"
    },
    yellow: {
      dark: "#ffd966",
      light: "#fff2cc"
    },
    green: {
      dark: "#93c47d",
      light: "#d9ead3"
    },
    red: {
      dark: "#e06666",
      light: "#f4cccc"
    },
    blue: {
      dark: "#6fa8dc",
      light: "#cfe2f3"
    },
    purple: {
      dark: "#8e7cc3",
      light: "#d9d2e9"
    },
    pink: {
      dark: "#c27ba0",
      light: "#ead1dc"
    },
    

  },
  chosenMondays: []
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
      if (action.payload.id in database) {
        database[action.payload.id][action.payload.type] = action.payload.name;
      } else {
        database[action.payload.id] = {
          [action.payload.type]: action.payload.name
        };
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

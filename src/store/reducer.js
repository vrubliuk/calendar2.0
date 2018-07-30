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
    }
  },
  chosenMondays: [
    // {
    //   id: "2018.7.16",
    //   type: "morningShift"
    // }
  ]
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
    case actionTypes.UPDATE_SCHEDULE:
      let database = { ...state.database };
      let {id, type, name} = action.payload;
      for(let i = 0; i < 5; i++) {
        let day = new Date(id.split('.')[0], id.split('.')[1] - 1, id.split('.')[2]);
        day.setDate(day.getDate()+i);
        const currentId = `${day.getFullYear()}.${day.getMonth() + 1}.${day.getDate()}`;
        (currentId in database) ? database[currentId][type] = name : database[currentId] = {
          [type]: name
        };
      }
      return {
        ...state,
        database
      };
    case actionTypes.TOGGLE_MONDAY_SELECTION:
      let chosenMondays = [...state.chosenMondays];
      const passedMonday = {
        id: action.payload.id,
        type: action.payload.type
      };
      const index = chosenMondays.findIndex(monday => {
        return monday.id === passedMonday.id && monday.type === passedMonday.type;
      });
      index > -1 ? chosenMondays.splice(index, 1) : chosenMondays.push(passedMonday);
      return {
        ...state,
        chosenMondays
      };

    case actionTypes.CLEAR_CHOSEN_MONDAYS:
      return {
        ...state,
        chosenMondays: []
      };

    case actionTypes.SET_COLOR:
      database = { ...state.database };
      chosenMondays = [...state.chosenMondays];
      chosenMondays.forEach(monday => {
        monday.id in database && "colors" in database[monday.id] && monday.type in database[monday.id].colors
          ? (database[monday.id].colors[monday.type] = action.color)
          : (database[monday.id].colors = {
              ...database[monday.id].colors,
              [monday.type]: action.color
            });
      });
      return {
        ...state,
        database
      };

    default:
      return state;
  }
};

export default reducer;

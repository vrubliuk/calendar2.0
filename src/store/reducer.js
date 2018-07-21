import * as actionTypes from "./actions";

const initialState = {
  authorized: true,
  date: new Date(),
  hoveredDayId: null,
  database: {
    "2018.7.16":{
      confirmedDayOff: "Uliana",
      pendingDayOff: "Yaryna",
      morningShift: "Oksana",
      sharedInbox: "Yaryna",
      audit: 'Nazar'
    },
    "2018.7.18":{
      confirmedDayOff: "Uliana",
      pendingDayOff: "Yaryna",
      morningShift: "Oksana",
      sharedInbox: "Yaryna",
      audit: 'Nazar'
    },
    "2018.7.19":{
      confirmedDayOff: "Uliana",
  
      morningShift: "Oksana",
      sharedInbox: "Yaryna",
      audit: 'Nazar'
    },
    "2018.7.3":{
    
      pendingDayOff: "Yaryna",
      morningShift: "Oksana",
      sharedInbox: "Yaryna",
      audit: 'Nazar'
    },
  },

};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PREVIOUS_MONTH:
      return {
        ...state,
        date: new Date(state.date.setMonth(state.date.getMonth() - 1))
      };
    case actionTypes.NEXT_MONTH:
      return {
        ...state,
        date: new Date(state.date.setMonth(state.date.getMonth() + 1))
      };
    case actionTypes.HOVER_DAY:
      return {
        ...state,
        hoveredDayId: action.id
      }
    default:
      return state;
  }
};

export default reducer;

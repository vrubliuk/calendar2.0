import * as actionTypes from "../actions/actionTypes";
import { updateState } from "../utility/updateState";

const initialState = {
  days: {
    // THE DATA STRUCTURE
    // "2020-7-16": {
    //   confirmedDayOff: ["Uliana", "Oksana"],
    //   pendingDayOff: ["Uliana", "Oksana"],
    //   morningShift: ["Uliana", "Oksana"],
    //   sharedInbox: ["Uliana", "Oksana"],
    //   audit: ["Uliana", "Oksana"],
    //   system3: ["Uliana", "Oksana"],
    //   colors: {
    //     morningShift: "yellow",
    //     sharedInbox: "green",
    //     audit: "blue"
    //   }
    // }
  }
};

const updateDays = (state, action) => {
  let days = { ...state.days };
  for (let day in action.daysWithChanges) {
    days[day] = action.daysWithChanges[day];
  }
  return updateState(state, { days });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_DAYS:
      return updateDays(state, action);
    default:
      return state;
  }
};

export default reducer;

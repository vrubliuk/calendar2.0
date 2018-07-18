import * as actionTypes from "./actions";

const initialState = {
  date: new Date()
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
    default:
      return state;
  }
};

export default reducer;

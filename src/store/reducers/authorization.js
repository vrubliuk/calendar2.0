import * as actionTypes from "../actions/actionTypes";
import { updateState } from "../utility/updateState";

const initialState = {
  authorized: true,
  error: false
};

const updateAuthrized = (state, action) => {
  return updateState(state, { authorized: action.status });
};

const toggleError = state => {
  return updateState(state, { error: !state.error });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_AUTHORIZED:
      return updateAuthrized(state, action);
    case actionTypes.TOGGLE_ERROR:
      return toggleError(state);
    default:
      return state;
  }
};

export default reducer;

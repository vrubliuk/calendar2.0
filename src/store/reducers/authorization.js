import * as actionTypes from "../actions/actionTypes";
import { updateState } from "../utility/updateState";

const initialState = {
  idToken: null,
  error: false
};

const updateAuthData = (state, action) => {
  return updateState(state, { 
    idToken: action.idToken,
   });
};

const toggleError = state => {
  return updateState(state, { error: !state.error });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_AUTH_DATA:
      return updateAuthData(state, action);
    case actionTypes.TOGGLE_ERROR:
      return toggleError(state);
    default:
      return state;
  }
};

export default reducer;

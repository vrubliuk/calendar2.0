import * as actionTypes from "../actions/actionTypes";
import { updateState } from "../utility/updateState";

const initialState = {
  lastUpdate: null
};

const setLastUpdate = (state, action) => {
  return updateState(state, { lastUpdate: action.date });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_LAST_UPDATE:
      return setLastUpdate(state, action);
    default:
      return state;
  }
};

export default reducer;

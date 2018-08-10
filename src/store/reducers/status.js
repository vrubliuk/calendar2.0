import * as actionTypes from "../actions/actionTypes";
import { updateState } from "../utility/updateState";

const initialState = {
  lastUpdate: null,
  savingIndicator: true
};

const setLastUpdate = (state, action) => {
  return updateState(state, { lastUpdate: action.date });
};

const showSavingIndicator = state => {
  return updateState(state, { savingIndicator: true });
};

const hideSavingIndicator = state => {
  return updateState(state, { savingIndicator: false });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_LAST_UPDATE:
      return setLastUpdate(state, action);
    case actionTypes.SHOW_SAVING_INDICATOR:
      return showSavingIndicator(state);
    case actionTypes.HIDE_SAVING_INDICATOR:
      return hideSavingIndicator(state);
    default:
      return state;
  }
};

export default reducer;

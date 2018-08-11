import * as actionTypes from "./actionTypes";

export const hideSpinner = () => {
  return {
    type: actionTypes.HIDE_SPINNER
  };
};

export const setLastUpdate = date => {
  return {
    type: actionTypes.SET_LAST_UPDATE,
    date
  };
};

export const showSavingIndicator = () => {
  return {
    type: actionTypes.SHOW_SAVING_INDICATOR
  };
};

export const hideSavingIndicator = () => {
  return {
    type: actionTypes.HIDE_SAVING_INDICATOR
  };
};

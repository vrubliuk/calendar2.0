import * as actionTypes from "./actionTypes";
import * as API from "../utility/API";

const toggleError = () => {
  return {
    type: actionTypes.TOGGLE_ERROR
  };
};

export const logIn = (email, password) => {
  return dispatch => {
    API.postEmailPassword(email, password).then(
      res => {
        console.log(res);
      },
      () => {
        dispatch(toggleError());
        setTimeout(dispatch.bind(this, toggleError()), 2000);
      }
    );
  };
};

import * as actionTypes from "./actionTypes";
import * as API from "../utility/API";

export const updateAuthData = (idToken) => {
  return {
    type: actionTypes.UPDATE_AUTH_DATA,
    idToken
  };
};

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
        localStorage.refreshToken = res.data.refreshToken;
        dispatch(updateAuthData(res.data.idToken));
      },
      () => {
        dispatch(toggleError());
        setTimeout(dispatch.bind(this, toggleError()), 2000);
      }
    );
  };
};

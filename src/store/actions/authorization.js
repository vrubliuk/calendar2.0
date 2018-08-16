import * as actionTypes from "./actionTypes";
import * as API from "../utility/API";

export const updateAuthData = (idToken, refreshToken) => {
  return {
    type: actionTypes.UPDATE_AUTH_DATA,
    idToken,
    refreshToken
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
        dispatch(updateAuthData(res.data.idToken, res.data.refreshToken));
        
      },
      () => {
        dispatch(toggleError());
        setTimeout(dispatch.bind(this, toggleError()), 2000);
      }
    );
  };
};

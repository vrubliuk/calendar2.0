import * as actionTypes from "./actionTypes";
import * as API from "../utility/API";

const updateAuthData = (idToken, localId, refreshToken) => {
  return {
    type: actionTypes.UPDATE_AUTH_DATA,
    idToken,
    localId,
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
        dispatch(updateAuthData(res.data.idToken, res.data.localId, res.data.refreshToken));
      },
      () => {
        dispatch(toggleError());
        setTimeout(dispatch.bind(this, toggleError()), 2000);
      }
    );
  };
};

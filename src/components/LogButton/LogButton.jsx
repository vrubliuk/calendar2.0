import React from "react";
import "./LogButton.css";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions/actionCreators";

const LogButton = ({ history, location, idToken, updateAuthData, setPreviousRoute }) => {
  const text = idToken ? "Log out" : "Log in";

  const handleClickLogIn = () => {
    history.push("/authentication");
  };
  const handleClickLogOut = () => {
    localStorage.removeItem('refreshToken');
    updateAuthData(null);
    setPreviousRoute(location.pathname)
    history.push("/authentication");
  };
  const handleClick = idToken ? handleClickLogOut : handleClickLogIn;

  return (
    <button className="LogButton" onClick={handleClick}>
      {text}
    </button>
  );
};

const mapStateToProps = state => {
  return {
    idToken: state.authorization.idToken
  };
};

const mapDispatch = dispatch => {
  return {
    updateAuthData: (idToken) => dispatch(actionCreators.updateAuthData(idToken)),
    setPreviousRoute: payload => dispatch(actionCreators.setPreviousRoute(payload))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatch
  )(LogButton)
);

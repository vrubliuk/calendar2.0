import React from "react";
import "./LogButton.css";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions/actionCreators";

const LogButton = ({ history, idToken, updateAuthData }) => {
  const text = idToken ? "Log out" : "Log in";

  const handleClickLogIn = () => {
    history.push("/authentication");
  };
  const handleClickLogOut = () => {
    updateAuthData(null, null, null);
    history.push("/");
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
    updateAuthData: (idToken, localId, refreshToken) => dispatch(actionCreators.updateAuthData(idToken, localId, refreshToken))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatch
  )(LogButton)
);
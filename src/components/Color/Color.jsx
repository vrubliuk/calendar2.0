import React from "react";
import "./Color.css";
import Radium from "radium";
import { connect } from "react-redux";
import * as actionTypes from "../../store/actions"

const Color = ({ name, colors, setColor, chosenMondays, clearChosenMondays }) => {


  let style = {
    background: colors[name].light,
    border: `2px solid ${colors[name].dark}`,
    ":hover": {
      boxShadow: `0 0 8px ${colors[name].dark}`
    }
  };

  const handleClick = () => {
    setColor(name, chosenMondays)
    clearChosenMondays()
  }
  return <div className="Color" style={style} onClick={handleClick} />;
};

const mapStateToProps = (state) => {
  return {
    colors: state.colors.colors,
    chosenMondays: state.temporary.chosenMondays
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setColor: (name, chosenMondays) => dispatch({type: actionTypes.SET_COLOR, color: name, chosenMondays}),
    clearChosenMondays: () => dispatch({type: actionTypes.CLEAR_CHOSEN_MONDAYS})
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Radium(Color));

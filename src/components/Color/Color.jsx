import React from "react";
import "./Color.css";
import Radium from "radium";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions/actionCreators"
import {colors} from "../../assets/colors"

const Color = ({ name, setColor, chosenMondays, clearChosenMondays }) => {


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
    chosenMondays: state.temporary.chosenMondays
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // setColor: (name, chosenMondays) => dispatch({type: actionTypes.SET_COLOR, color: name, chosenMondays}),
    // clearChosenMondays: () => dispatch({type: actionTypes.CLEAR_CHOSEN_MONDAYS})
    setColor: (name, chosenMondays) => dispatch(actionCreators.setColor(name, chosenMondays)),
    clearChosenMondays: () => dispatch(actionCreators.clearChosenMondays())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Radium(Color));

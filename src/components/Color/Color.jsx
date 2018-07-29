import React from "react";
import "./Color.css";
import Radium from "radium";
import { connect } from "react-redux";

const Color = ({ name, colors, setColor, clearChosenMondays }) => {


  let style = {
    background: colors[name].light,
    border: `2px solid ${colors[name].dark}`,
    ":hover": {
      boxShadow: `0 0 8px ${colors[name].dark}`
    }
  };


  const handleClick = () => {
    setColor(name)
    clearChosenMondays()
  }


  // let style = {};
  // const styleColors = {
  //   background: colors[name].light,
  //   border: `2px solid ${colors[name].dark}`
  // };

  // const styleHover = chosenMondays.length ? {
  //   cursor: 'pointer',
  //   ":hover": {
  //     boxShadow: `0 0 8px ${colors[name].dark}`
  //   }
  // } : null;
  // style = {...styleColors, ...styleHover}




  return <div className="Color" style={style} onClick={handleClick} />;
};

const mapStateToProps = ({ colors }) => {
  return {
    colors
    
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setColor: (name) => dispatch({type: "SET_COLOR", color: name}),
    clearChosenMondays: () => dispatch({type: "CLEAR_CHOSEN_MONDAYS"})
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Radium(Color));

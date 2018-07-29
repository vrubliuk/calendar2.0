import React from "react";
import "./Color.css";
import Radium from "radium";
import { connect } from "react-redux";

const Color = ({ name, colors }) => {
  const style = {
    background: colors[name].light,
    border: `2px solid ${colors[name].dark}`,
    ":hover": {
      boxShadow: `0 0 8px ${colors[name].dark}`
    }
  };

  return <div className="Color" style={style} />;
};

const mapStateToProps = ({ colors }) => {
  return {
    colors
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Radium(Color));

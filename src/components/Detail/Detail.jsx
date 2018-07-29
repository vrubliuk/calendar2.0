import React from "react";
import "./Detail.css";
import { connect } from "react-redux";

const Detail = ({ id, type, database, colors, chosenMondays, handleDataTransfer }) => {
  const infoExists = id in database && type in database[id];
  const colorExists = infoExists && "colors" in database[id] && type in database[id].colors;

  const info = infoExists ? <div className="Detail__Info">{database[id][type]}</div> : null;
  // const color = colorExists ? database[id].colors[type] : null;

  // const additionalStyle = color ? {
  //   background: colors[color].light,
  //   border: `2px solid ${colors[color].dark}`
  // } : null;

  const additionalStyle = colorExists
    ? {
        background: colors[database[id].colors[type]].light,
        border: `2px solid ${colors[database[id].colors[type]].dark}`
      }
    : null;

  const mondayIsChosen =
    chosenMondays.findIndex(monday => {
      return monday.id === id && monday.type === type;
    }) > -1;

  const pointer = mondayIsChosen ? <div className="Detail__Pointer" style={{ background: colors[database[id].colors[type]].dark }} /> : null;

  const handleDragOver = e => {
    e.preventDefault();
  };
  const handleDrop = e => {
    e.preventDefault();
    const name = e.dataTransfer.getData("text");
    handleDataTransfer(id, type, name);
  };

  return (
    <div className={`Detail ${info ? "Detail-Filled" : ""}`} style={additionalStyle} onDragOver={handleDragOver} onDrop={handleDrop}>
      {info}
      {pointer}
    </div>
  );
};

const mapStateToProps = ({ database, colors, chosenMondays }) => {
  return {
    database,
    colors,
    chosenMondays
  };
};
const mapDispatchToProps = dispatch => {
  return {
    handleDataTransfer: (id, type, name) => dispatch({ type: "UPDATE_DETAIL", payload: { id, type, name } })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Detail);

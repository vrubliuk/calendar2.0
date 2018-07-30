import React from "react";
import "./Detail.css";
import { connect } from "react-redux";

const Detail = ({ id, type, database, colors, chosenMondays, handleDataTransfer, handleMondaySelection }) => {
  const infoExists = id in database && type in database[id];
  const colorExists = infoExists && "colors" in database[id] && type in database[id].colors;
  const info = infoExists ? <div className="Detail__Info">{database[id][type]}</div> : null;

  const additionalStyleDetail = colorExists
    ? {
        background: colors[database[id].colors[type]].light,
        border: `2px solid ${colors[database[id].colors[type]].dark}`
      }
    : null;

  const mondayIsChosen =
    chosenMondays.findIndex(monday => {
      return monday.id === id && monday.type === type;
    }) > -1;

  const additionalStylePointer = colorExists
    ? {
        background: colors[database[id].colors[type]].dark
      }
    : null;

  const pointer = mondayIsChosen ? <div className="Detail__Pointer" style={additionalStylePointer} /> : null;

  const handleDragOver = e => {
    e.preventDefault();
  };
  const handleDrop = e => {
    e.preventDefault();
    const name = e.dataTransfer.getData("text");
    handleDataTransfer(id, type, name);
  };

  const handleClick = infoExists ? handleMondaySelection.bind(this, id, type) : null;

  return (
    <div className={`Detail ${info ? "Detail-Filled" : ""}`} style={additionalStyleDetail} onDragOver={handleDragOver} onDrop={handleDrop} onClick={handleClick}>
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
    handleDataTransfer: (id, type, name) => dispatch({ type: "UPDATE_SCHEDULE", payload: { id, type, name } }),
    handleMondaySelection: (id, type) => dispatch({ type: "TOGGLE_MONDAY_SELECTION", payload: { id, type } })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Detail);

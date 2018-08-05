import React from "react";
import "./Detail.css";
import { connect } from "react-redux";
import Remover from "../Remover/Remover.jsx";
import * as actionCreators from "../../store/actions/index"

const Detail = ({ id, type, database, colors, chosenMondays, draggedType, handleDataTransfer, handleMondaySelection }) => {
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

  let handleDragOver = null;
  let handleDrop = null;
  if (draggedType === "schedule") {
    handleDragOver = e => {
      e.preventDefault();
    };
    handleDrop = e => {
      const name =  JSON.parse(e.dataTransfer.getData("text")).name;
      handleDataTransfer(id, type, name);
    };
  }

  const handleClick = infoExists ? handleMondaySelection.bind(this, id, type) : null;
  const remover = infoExists ? <Remover type="detail" id={id} detailType={type} /> : null;

  return (
    <div className={`Detail ${info ? "Detail-Filled" : ""}`} style={additionalStyleDetail} onDragOver={handleDragOver} onDrop={handleDrop} onClick={handleClick}>
      {info}
      {pointer}
      {remover}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    database: state.days.database,
    colors: state.colors.colors,
    chosenMondays: state.temporary.chosenMondays,
    draggedType: state.temporary.draggedType
  };
};
const mapDispatchToProps = dispatch => {
  return {
    // handleDataTransfer: (id, type, name) => dispatch({ type: actionTypes.UPDATE_SCHEDULE, payload: { id, type, name } }),
    // handleMondaySelection: (id, type) => dispatch({ type: actionTypes.TOGGLE_MONDAY_SELECTION, payload: { id, type } })
    handleDataTransfer: (id, type, name) => dispatch( actionCreators.updateSchedule(id, type, name)  ),
    handleMondaySelection: (id, type) => dispatch( actionCreators.toggleMondaySelection(id, type) )
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Detail);

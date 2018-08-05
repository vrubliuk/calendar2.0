import React from "react";
import "./Employee.css";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions/index"

const Employee = ({ name, type, setDraggedType }) => {
  let additionalClass = "";
  switch (type) {
    case "confirmedDayOff":
      additionalClass = "Employee-ConfirmedDayOff";
      break;
    case "pendingDayOff":
      additionalClass = "Employee-PendingDayOff";
      break;
    case "schedule":
      additionalClass = "Employee-Schedule";
      break;
    default:
      break;
  }

  const handleDragStart = e => {
    e.dataTransfer.setData("text", JSON.stringify({name, type}) );
    e.dropEffect = "copy";
    setDraggedType(type);
  };
  const handleDragEnd = () => {
    setDraggedType(null);
  };
  return (
    <div className={`Employee ${additionalClass}`} draggable="true" onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
      {name}
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    // setDraggedType: payload => dispatch({ type: actionTypes.SET_DRAGGED_TYPE, payload })
    setDraggedType: payload => dispatch(actionCreators.setDraggedType(payload))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Employee);

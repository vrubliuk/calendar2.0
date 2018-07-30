import React from "react";
import "./Employee.css";
import { connect } from "react-redux";

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
    e.dataTransfer.setData("text", name);
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
    setDraggedType: payload => dispatch({ type: "SET_DRAGGED_TYPE", payload })
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Employee);

import React from "react";
import "./Remover.css";
import { connect } from "react-redux";

const Remover = ({ type, id, employeeIndex, removeDayOff, removeEmployee }) => {
  let additionalClass = "";
  let remove = () => {};

  switch (type) {
    case "day":
      additionalClass = "Remover-Schedule";
      remove = removeDayOff.bind(this, id)
      break;
    case "today":
      additionalClass = "Remover-Schedule Remover-Schedule-White";
      remove = removeDayOff.bind(this, id)
      break;
    case "detail":
      additionalClass = "Remover-Schedule";
      break;
    case "employee":
      additionalClass = "Remover-Employee";
      remove = removeEmployee.bind(this, employeeIndex)
      break;

    default:
      break;
  }

  const handleClick = e => {
    e.stopPropagation();
    remove();
  };

  return (
    <div className={`Remover ${additionalClass}`} onClick={handleClick}>
      {"\u00D7"}
    </div>
  );
};

const mapStateToProps = ({ colors }) => {
  return {
    colors
  };
};

const mapDispatchToProps = dispatch => {
  return {
    removeDayOff:(id) => dispatch({type: "REMOVE_DAYOFF", id}),
    removeSchedule: () => dispatch({type: 'REMOVE_SCHEDULE'}),
    removeEmployee: (employeeIndex) => dispatch({type: 'REMOVE_EMPLOYEE', employeeIndex}),
    
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Remover);

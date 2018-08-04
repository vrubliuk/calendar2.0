import React from "react";
import "./Remover.css";
import { connect } from "react-redux";
import * as actionTypes from "../../store/actions";

const Remover = ({ type, id, detailType, employeeIndex, removeDayOff, removeSchedule, removeEmployee }) => {
  let additionalClass = "";
  let remove = () => {};

  switch (type) {
    case "day":
      additionalClass = "Remover-Schedule";
      remove = removeDayOff.bind(this, id);
      break;
    case "today":
      additionalClass = "Remover-Schedule Remover-Schedule-White";
      remove = removeDayOff.bind(this, id);
      break;
    case "detail":
      additionalClass = "Remover-Schedule";
      remove = removeSchedule.bind(this, id, detailType);
      break;
    case "employee":
      additionalClass = "Remover-Employee";
      remove = removeEmployee.bind(this, employeeIndex);
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
    removeDayOff: id => dispatch({ type: "REMOVE_DAYOFF", id }),
    removeSchedule: (id, detailType) => dispatch({ type: actionTypes.REMOVE_SCHEDULE, payload: { id, detailType } }),
    removeEmployee: employeeIndex => dispatch({ type: actionTypes.REMOVE_EMPLOYEE, employeeIndex })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Remover);

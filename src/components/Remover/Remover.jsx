import React from "react";
import "./Remover.css";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions/actionCreators";

const Remover = ({ type, id, detailType, employeeIndex, removeDayOff, removeSchedule, toogleEmployee }) => {
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
      remove = toogleEmployee.bind(this, "remove", null, employeeIndex);
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

const mapDispatchToProps = dispatch => {
  return {
    removeDayOff: id => dispatch(actionCreators.removeDayOff(id)),
    removeSchedule: (id, detailType) => dispatch(actionCreators.removeSchedule(id, detailType)),
    toogleEmployee: (action, employeeName, employeeIndex) => dispatch(actionCreators.toogleEmployee(action, employeeName, employeeIndex))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Remover);

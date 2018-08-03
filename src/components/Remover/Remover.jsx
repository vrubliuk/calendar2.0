import React from "react";
import "./Remover.css";
import { connect } from "react-redux";

const Remover = ({ type, employeeIndex, removeEmployee }) => {
  let additionalClass = "";
  let remove = () => {};

  switch (type) {
    case "day":
      additionalClass = "Remover-Schedule";
      break;
    case "today":
      additionalClass = "Remover-Schedule Remover-Schedule-White";
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
    removeEmployee: (employeeIndex) => dispatch({type: 'REMOVE_EMPLOYEE', employeeIndex})
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Remover);

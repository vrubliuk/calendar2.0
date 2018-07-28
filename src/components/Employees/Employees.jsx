import React from "react";
import "./Employees.css";
import Employee from "../Employee/Employee";
import { connect } from "react-redux";

const Employees = ({ type, employees }) => {
  const employeesList = employees.map((name, i) => <Employee name={name} type={type} key={i} />);

  let headerText = null;
  let additionalClass = "";
  switch (type) {
    case "confirmedDayOff":
      headerText = "Confirmed day off";
      additionalClass = "Employees-ConfirmedDayOff";
      break;
    case "pendingDayOff":
      headerText = "Pending day off";
      additionalClass = "Employees-PendingDayOff";
      break;
    case "schedule":
      headerText = "Morning shift / Shared inbox / Audit";
      additionalClass = "Employees-Schedule";
      break;
    default:
      break;
  }

  return (
    <div className={`Employees ${additionalClass}`}>
      <div className="Employees__Header">{headerText}</div>
      <div className="Employees__Body">{employeesList}</div>
      <div className="Employees__Footer" />
    </div>
  );
};

const mapStateToProps = ({ employees }) => {
  return {
    employees
  };
};

export default connect(mapStateToProps)(Employees);

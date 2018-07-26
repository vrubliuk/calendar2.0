import React from "react";
import "./Employees.css";
import Employee from "../Employee/Employee";
import { connect } from "react-redux";

const Employees = ({ employees }) => {
  const employeesList = employees.map((employee, i) => <Employee name={employee} key={i} />);
  return <div className="Employees">{employeesList}</div>;
};

const mapStateToProps = ({ employees }) => {
  return {
    employees
  };
};

export default connect(mapStateToProps)(Employees);

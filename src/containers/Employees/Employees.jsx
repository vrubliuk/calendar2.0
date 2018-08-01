import React from "react";
import "./Employees.css";
import { connect } from "react-redux";
import Remover from "../../components/Remover/Remover";

const Employees = ({ employees }) => {

  const employeesList = employees.map((name, i)=> {
    return (
      <div className="Employees__Item" key={i}>
        <div className="Employees__Item__Name">{name}</div>
        <Remover type="employee"/>
      </div>
    )
  })



  return (
    <div className="Employees">
      <div className="Employees__InnerContainer">
        <div className="Employees__Header">
          <input type="text" placeholder="Enter name here" maxLength='25' />
          <button>Add</button>
        </div>
        {employeesList}
      </div>
    </div>
  );
};

const mapStateToProps = ({ employees }) => {
  return {
    employees
  };
};
const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Employees);

import React, { Component } from "react";
import "./Employees.css";
import { connect } from "react-redux";
import Remover from "../../components/Remover/Remover";
import * as actionTypes from "../../store/actions"

class Employees extends Component {
  state = {
    newEmployeeName: ""
  };

  handleInput = e => {
    const newEmployeeName = e.target.value;
    this.setState({
      newEmployeeName
    });
  };

  handleClick = () => {
    if (!this.state.newEmployeeName) return;
    this.props.addEmployee(this.state.newEmployeeName);
    this.setState({
      newEmployeeName: ""
    });
  };

  render() {
    const employeesList = this.props.employees.map((name, i) => {
      return (
        <div className="Employees__Item" key={i}>
          <div className="Employees__Item__Name">{name}</div>
          <Remover type="employee" employeeIndex={i} />
        </div>
      );
    });

    const additionalButtonClass = this.state.newEmployeeName ? "Employees__Button-Active" : "";

    return (
      <div className="Employees__OuterContainer">
        <div className="Employees">
          <div className="Employees__InnerContainer">
            <div className="Employees__Header">
              <input type="text" placeholder="Enter name here" maxLength="25" value={this.state.newEmployeeName} onChange={this.handleInput} />
              <button className={`Employees__Button ${additionalButtonClass}`} onClick={this.handleClick}>
                Add
              </button>
            </div>
            {employeesList}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ employees }) => {
  return {
    employees
  };
};
const mapDispatchToProps = dispatch => {
  return {
    addEmployee: employeeName => dispatch({ type: actionTypes.ADD_EMPLOYEE, employeeName })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Employees);

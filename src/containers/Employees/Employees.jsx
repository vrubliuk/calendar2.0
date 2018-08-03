import React, { Component } from "react";
import "./Employees.css";
import { connect } from "react-redux";
import Remover from "../../components/Remover/Remover";

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

  render() {
    const employeesList = this.props.employees.map((name, i) => {
      return (
        <div className="Employees__Item" key={i}>
          <div className="Employees__Item__Name">{name}</div>
          <Remover type="employee" employeeIndex={i} />
        </div>
      );
    });

    return (
      <div className="Employees">
        <div className="Employees__InnerContainer">
          <div className="Employees__Header">
            <input type="text" placeholder="Enter name here" maxLength="25" value={this.state.newEmployeeName} onChange={this.handleInput} />
            <button onClick={this.props.addEmployee.bind(this, this.state.newEmployeeName)}>Add</button>
          </div>
          {employeesList}
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
    addEmployee: employeeName => dispatch({ type: "ADD_EMPLOYEE", employeeName })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Employees);

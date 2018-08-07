import * as actionTypes from "./actionTypes"
import * as API from "../utility/API"

const setEmployees = (employees) => {
  return {
    type: actionTypes.SET_EMPLOYEES,
    employees
  }
}

export const fetchEmployees = () => {
  return dispatch => {
    API.getEmployees().then(res=> {
      dispatch(setEmployees(res.data));
    })
  }
}

export const addEmployee = (employees, employeeName) => {
  return dispatch => {
    let newEmployees = [...employees];
    newEmployees.push(employeeName);
    API.putEmployees(newEmployees).then(res=> {
      dispatch(setEmployees(res.data));
    })
  }
};

export const removeEmployee = (employees, employeeIndex) => {
  let newEmployees = [...employees];
  newEmployees.splice(employeeIndex, 1);
  return dispatch => {
    API.putEmployees(newEmployees).then(res=> {
      dispatch(setEmployees(res.data));
    })
  }
};
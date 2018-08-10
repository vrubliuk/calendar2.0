import * as actionTypes from "./actionTypes"
import * as API from "../utility/API"
import { setLastUpdate } from "./status";

export const setEmployees = (employees) => {
  return {
    type: actionTypes.SET_EMPLOYEES,
    employees
  }
}

export const addEmployee = employeeName => {
  return (dispatch, getState) => {
    const newEmployees = [...getState().employees.employees];
    newEmployees.push(employeeName);
    API.putEmployees(newEmployees)
      .then(res => {
        dispatch(setEmployees(res.data));
      })
      .then(() => {
        return API.putLastUpdate(new Date().getTime());
      })
      .then(res => {
        dispatch(setLastUpdate(res.data));
      });
  };
};

export const removeEmployee = employeeIndex => {
  return (dispatch, getState) => {
    const newEmployees = [...getState().employees.employees];
    newEmployees.splice(employeeIndex, 1);
    API.putEmployees(newEmployees)
      .then(res => {
        dispatch(setEmployees(res.data));
      })
      .then(() => {
        return API.putLastUpdate(new Date().getTime());
      })
      .then(res => {
        dispatch(setLastUpdate(res.data));
      });
  };
};
import * as actionTypes from "./actionTypes"

export const addEmployee = employeeName => {
  return {
    type: actionTypes.ADD_EMPLOYEE,
    employeeName
  };
};
export const removeEmployee = employeeIndex => {
  return {
    type: actionTypes.REMOVE_EMPLOYEE,
    employeeIndex
  };
};
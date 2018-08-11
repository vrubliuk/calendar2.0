import * as actionTypes from "./actionTypes";
import * as API from "../utility/API";
import { setLastUpdate, showSavingIndicator, hideSavingIndicator } from "./status";

export const setEmployees = employees => {
  return {
    type: actionTypes.SET_EMPLOYEES,
    employees
  };
};

export const toogleEmployee = (option, employeeName, employeeIndex) => {
  return (dispatch, getState) => {
    dispatch(showSavingIndicator());
    const oldEmployees = getState().employees.employees;
    const newEmployees = [...oldEmployees];
    if (option === "add") {
      newEmployees.push(employeeName);
    } else if (option === "remove") {
      newEmployees.splice(employeeIndex, 1);
    }
    dispatch(setEmployees(newEmployees));
    API.putEmployees(newEmployees)
      .then(() => {
        return API.putLastUpdate(new Date().getTime());
      })
      .then(res => {
        dispatch(setLastUpdate(res.data));
        dispatch(hideSavingIndicator());
      })
      .catch(() => {
        dispatch(setEmployees(oldEmployees));
        dispatch(hideSavingIndicator());
        alert("Something went wrong :) Please contact Val Rubliuk for assistance.");
      });
  };
};

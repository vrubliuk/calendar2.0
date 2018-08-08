import * as API from "../utility/endpoints";
import { setEmployees } from "./employees";
import { setLastUpdate } from "./history";

// GENERAL
export const fetchDatabase = () => {
  return dispatch => {
    Promise.all([API.getEmployees(), API.getLastUpdate()]).then(res => {
      dispatch(setEmployees(res[0].data));
      dispatch(setLastUpdate(res[1].data));
    });
  };
};

// EMPLOYEES
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

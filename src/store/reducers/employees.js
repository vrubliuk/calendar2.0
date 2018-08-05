import * as actionTypes from "../actions/actionTypes";
import { updateState } from "../utility/updateState";

const initialState = {
  employees: ["Yaryna", "Oksana", "Uliana", "Nazar"]
};

const addEmployee = (state, action) => {
  let employees = [...state.employees];
  employees.push(action.employeeName);
  return updateState(state, { employees });
};

const removeEmployee = (state, action) => {
  let employees = [...state.employees];
  employees.splice(action.employeeIndex, 1);
  return updateState(state, { employees });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_EMPLOYEE:
      return addEmployee(state, action);
    case actionTypes.REMOVE_EMPLOYEE:
      return removeEmployee(state, action);
    default:
      return state;
  }
};

export default reducer;

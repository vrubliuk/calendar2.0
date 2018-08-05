import * as actionTypes from "../actions/actionTypes";
import { updateState } from "../utility/updateState";

const initialState = {
  employees: ["Yaryna", "Oksana", "Uliana", "Nazar"]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_EMPLOYEE:
      let employees = [...state.employees];
      employees.push(action.employeeName);
      return updateState(state, {employees})
      
    case actionTypes.REMOVE_EMPLOYEE:
      employees = [...state.employees];
      employees.splice(action.employeeIndex, 1);
      return updateState(state, {employees})
      

    default:
      return state;
  }
};

export default reducer;

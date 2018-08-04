import * as actionTypes from "../actions";

const initialState = {
  employees: ["Yaryna", "Oksana", "Uliana", "Nazar"]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_EMPLOYEE:
      let employees = [...state.employees];
      employees.push(action.employeeName);

      return {
        ...state,
        employees
      };
    case actionTypes.REMOVE_EMPLOYEE:
      employees = [...state.employees];
      employees.splice(action.employeeIndex, 1);

      return {
        ...state,
        employees
      };

    default:
      return state;
  }
};

export default reducer;

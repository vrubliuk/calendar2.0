import * as actionTypes from "../actions/actionTypes";
import { updateState } from "../utility/updateState";

const initialState = {
  employees: []
};

const setEmployees = (state, action) => {
  const newEmployees = action.employees ? action.employees : [];
  return updateState(state, { employees: newEmployees });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_EMPLOYEES:
      return setEmployees(state, action);
    default:
      return state;
  }
};

export default reducer;

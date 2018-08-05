export const PREVIOUS_MONTH = "PREVIOUS_MONTH";
export const NEXT_MONTH = "NEXT_MONTH";
export const PREVIOUS_YEAR = "PREVIOUS_YEAR";
export const NEXT_YEAR = "NEXT_YEAR";
export const HOVER_DAY = "HOVER_DAY";
export const UPDATE_DAYOFF = "UPDATE_DAYOFF";
export const UPDATE_SCHEDULE = "UPDATE_SCHEDULE";
export const REMOVE_DAYOFF = "REMOVE_DAYOFF";
export const REMOVE_SCHEDULE = "REMOVE_SCHEDULE";
export const TOGGLE_MONDAY_SELECTION = "TOGGLE_MONDAY_SELECTION";
export const CLEAR_CHOSEN_MONDAYS = "CLEAR_CHOSEN_MONDAYS";
export const SET_COLOR = "SET_COLOR";
export const SET_DRAGGED_TYPE = "SET_DRAGGED_TYPE";
export const ADD_EMPLOYEE = "ADD_EMPLOYEE";
export const REMOVE_EMPLOYEE = "REMOVE_EMPLOYEE";

export const previousMonth = () => {
  return {
    type: PREVIOUS_MONTH
  };
};
export const nextMonth = () => {
  return {
    type: NEXT_MONTH
  };
};
export const previousYear = () => {
  return {
    type: PREVIOUS_YEAR
  };
};
export const nextYear = () => {
  return {
    type: NEXT_YEAR
  };
};

export const hoverDay = id => {
  return {
    type: HOVER_DAY,
    id
  };
};

export const updateDayOff = (id, type, name) => {
  return {
    type: UPDATE_DAYOFF,
    payload: { id, type, name }
  };
};
export const updateSchedule = (id, type, name) => {
  return {
    type: UPDATE_SCHEDULE,
    payload: { id, type, name }
  };
};
export const removeDayOff = id => {
  return {
    type: REMOVE_DAYOFF,
    id
  };
};
export const removeSchedule = (id, detailType) => {
  return {
    type: REMOVE_SCHEDULE,
    payload: { id, detailType }
  };
};
export const toggleMondaySelection = (id, type) => {
  return {
    type: TOGGLE_MONDAY_SELECTION,
    payload: { id, type }
  };
};
export const clearChosenMondays = () => {
  return {
    type: CLEAR_CHOSEN_MONDAYS
  };
};

export const setColor = (color, chosenMondays) => {
  return {
    type: SET_COLOR,
    color,
    chosenMondays
  };
};

export const setDraggedType = payload => {
  return {
    type: SET_DRAGGED_TYPE,
    payload
  };
};
export const addEmployee = employeeName => {
  return {
    type: ADD_EMPLOYEE,
    employeeName
  };
};
export const removeEmployee = employeeIndex => {
  return {
    type: REMOVE_EMPLOYEE,
    employeeIndex
  };
};

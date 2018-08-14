import * as actionTypes from "./actionTypes"

export const previousMonth = () => {
  return {
    type: actionTypes.PREVIOUS_MONTH
  };
};
export const nextMonth = () => {
  return {
    type: actionTypes.NEXT_MONTH
  };
};
export const previousYear = () => {
  return {
    type: actionTypes.PREVIOUS_YEAR
  };
};
export const nextYear = () => {
  return {
    type: actionTypes.NEXT_YEAR
  };
};
export const hoverDay = id => {
  return {
    type: actionTypes.HOVER_DAY,
    id
  };
};
export const toggleMondaySelection = (id, type) => {
  return {
    type: actionTypes.TOGGLE_MONDAY_SELECTION,
    payload: { id, type }
  };
};
export const clearChosenMondays = () => {
  return {
    type: actionTypes.CLEAR_CHOSEN_MONDAYS
  };
};
export const setDraggedType = payload => {
  return {
    type: actionTypes.SET_DRAGGED_TYPE,
    payload
  };
};

export const setPreviousRoute = payload => {
  return {
    type: actionTypes.SET_PREVIOUS_ROUTE,
    payload
  }
}


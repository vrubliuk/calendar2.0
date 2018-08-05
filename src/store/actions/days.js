import * as actionTypes from "./actionTypes";

export const updateDayOff = (id, type, name) => {
  return {
    type: actionTypes.UPDATE_DAYOFF,
    payload: { id, type, name }
  };
};
export const updateSchedule = (id, type, name) => {
  return {
    type: actionTypes.UPDATE_SCHEDULE,
    payload: { id, type, name }
  };
};
export const removeDayOff = id => {
  return {
    type: actionTypes.REMOVE_DAYOFF,
    id
  };
};
export const removeSchedule = (id, detailType) => {
  return {
    type: actionTypes.REMOVE_SCHEDULE,
    payload: { id, detailType }
  };
};
export const setColor = (color, chosenMondays) => {
  return {
    type: actionTypes.SET_COLOR,
    color,
    chosenMondays
  };
};

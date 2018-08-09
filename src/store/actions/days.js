import * as actionTypes from "./actionTypes";
import * as API from "../utility/API"
import {setLastUpdate} from "./history"


export const updateDays = (daysWithChanges) => {
  return {
    type: actionTypes.UPDATE_DAYS,
    daysWithChanges
  }
} 

export const updateDayOff = (id, type, name) => {
  return (dispatch, getState) => {
    let day = {};
    const days = getState().days.days;
    const idExists = id in days;
    let typeExists = idExists && type in days[id];
    if (typeExists) {
      if (days[id][type].indexOf(name) > -1) return;
      day = {
        [id]: {
          ...days[id],
          [type]: days[id][type].concat(name)
        }
      }
    } else if (idExists) {
      day = {
        [id]: {
          ...days[id],
          [type]: [name]
        }
      }
    } else {
      day = {
        [id]: {
          [type]: [name]
        }
      }
    }
    API.patchDays(day).then(res=> {
      dispatch(updateDays(res.data))
    }).then(() => {
      return API.putLastUpdate(new Date().getTime());
    })
    .then(res => {
      dispatch(setLastUpdate(res.data));
    });
  }
};



// export const updateDayOff = (id, type, name) => {
//   return {
//     type: actionTypes.UPDATE_DAYOFF,
//     payload: { id, type, name }
//   };
// };
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

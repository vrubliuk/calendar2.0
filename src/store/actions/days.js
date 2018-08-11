import * as actionTypes from "./actionTypes";
import * as API from "../utility/API";
import { setLastUpdate, showSavingIndicator, hideSavingIndicator } from "./status";

export const updateDays = daysWithChanges => {
  return {
    type: actionTypes.UPDATE_DAYS,
    daysWithChanges
  };
};

const removeDay = id => {
  return {
    type: actionTypes.REMOVE_DAY,
    id
  };
};

export const updateDayOff = (id, type, name) => {
  return (dispatch, getState) => {
    dispatch(showSavingIndicator());
    const oldDays = getState().days.days;
    let newDay = {};
    const idExists = id in oldDays;
    const oldDay = idExists ? { [id]: JSON.parse(JSON.stringify(getState().days.days[id])) } : null;
    const typeExists = idExists && type in oldDays[id];
    let errorsCounter = 0;
    if (typeExists) {
      if (oldDays[id][type].indexOf(name) > -1) return;
      newDay = {
        [id]: {
          ...oldDays[id],
          [type]: oldDays[id][type].concat(name)
        }
      };
    } else if (idExists) {
      newDay = {
        [id]: {
          ...oldDays[id],
          [type]: [name]
        }
      };
    } else {
      newDay = {
        [id]: {
          [type]: [name]
        }
      };
    }
    dispatch(updateDays(newDay));
    API.patchDays(newDay)
      .then(null, () => {
        oldDay ? dispatch(updateDays(oldDay)) : dispatch(removeDay(id));
        dispatch(hideSavingIndicator());
        errorsCounter++;
        return Promise.reject();
      })
      .then(() => {
        return API.putLastUpdate(new Date().getTime());
      })
      .then(
        res => {
          dispatch(setLastUpdate(res.data));
          dispatch(hideSavingIndicator());
        },
        () => {
          dispatch(hideSavingIndicator());
          errorsCounter ? alert("Can't update the day off. Please contact the administrator.") : alert("Can't set the date of the last update. Please contact the administrator.");
        }
      );
  };
};

export const removeDayOff = id => {
  return (dispatch, getState) => {
    dispatch(showSavingIndicator());
    const oldDay = {
      [id]: JSON.parse(JSON.stringify(getState().days.days[id]))
    };
    let newDay = {
      [id]: JSON.parse(JSON.stringify(getState().days.days[id]))
    };
    const confirmedDayOffExists = "confirmedDayOff" in newDay[id];
    const pendingDayOffExists = "pendingDayOff" in newDay[id];
    if (confirmedDayOffExists) delete newDay[id].confirmedDayOff;
    if (pendingDayOffExists) delete newDay[id].pendingDayOff;
    let errorsCounter = 0;
    dispatch(updateDays(newDay));
    API.patchDays(newDay)
      .then(null, () => {
        dispatch(updateDays(oldDay));
        dispatch(hideSavingIndicator());
        errorsCounter++;
        return Promise.reject();
      })
      .then(() => {
        return API.putLastUpdate(new Date().getTime());
      })
      .then(
        res => {
          dispatch(setLastUpdate(res.data));
          dispatch(hideSavingIndicator());
        },
        () => {
          dispatch(hideSavingIndicator());

          errorsCounter ? alert("Can't remove the day off. Please contact the administrator.") : alert("Can't set the date of the last update. Please contact the administrator.");
        }
      );
  };
};

export const updateSchedule = (id, type, name) => {
  return (dispatch, getState) => {};
};

export const removeSchedule = (id, detailType) => {
  return (dispatch, getState) => {};
};

export const setColor = (color, chosenMondays) => {
  return (dispatch, getState) => {};
};

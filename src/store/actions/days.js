import * as actionTypes from "./actionTypes";
import * as API from "../utility/API";
import { setLastUpdate, showSavingIndicator, hideSavingIndicator } from "./status";

export const updateDays = daysWithChanges => {
  return {
    type: actionTypes.UPDATE_DAYS,
    daysWithChanges
  };
};

export const updateDayOff = (id, type, name) => {
  return (dispatch, getState) => {
    dispatch(showSavingIndicator());
    const oldDays = getState().days.days;
    let newDay = {};
    const idExists = id in oldDays;
    const oldDay = idExists ? { [id]: JSON.parse(JSON.stringify(getState().days.days[id])) } : { [id]: {} };
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
  return (dispatch, getState) => {
    dispatch(showSavingIndicator());
    const oldDays = getState().days.days;
    const oldChosenDays = {};
    const newChosenDays = {};
    for (let i = 0; i < 5; i++) {
      let day = new Date(id.split("-")[0], id.split("-")[1] - 1, id.split("-")[2]);
      day.setDate(day.getDate() + i);
      const currentId = `${day.getFullYear()}-${day.getMonth() + 1}-${day.getDate()}`;
      if (currentId in oldDays) {
        oldChosenDays[currentId] = oldDays[currentId];
        newChosenDays[currentId] = JSON.parse(JSON.stringify(oldChosenDays[currentId]));
        newChosenDays[currentId][type] = name;
      } else {
        oldChosenDays[currentId] = {};
        newChosenDays[currentId] = {
          [type]: name
        };
      }
    }
    let errorsCounter = 0;
    dispatch(updateDays(newChosenDays));
    API.patchDays(newChosenDays)
      .then(null, () => {
        dispatch(updateDays(oldChosenDays));
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
          errorsCounter ? alert("Can't update the schedule. Please contact the administrator.") : alert("Can't set the date of the last update. Please contact the administrator.");
        }
      );
  };
};

export const removeSchedule = (id, detailType) => {
  return (dispatch, getState) => {
    dispatch(showSavingIndicator());
    const oldDays = getState().days.days;
    const oldChosenDays = {};
    const newChosenDays = {};
    for (let i = 0; i < 5; i++) {
      let day = new Date(id.split("-")[0], id.split("-")[1] - 1, id.split("-")[2]);
      day.setDate(day.getDate() + i);
      const currentId = `${day.getFullYear()}-${day.getMonth() + 1}-${day.getDate()}`;
      oldChosenDays[currentId] = oldDays[currentId];
      newChosenDays[currentId] = JSON.parse(JSON.stringify(oldChosenDays[currentId]));
      delete newChosenDays[currentId][detailType];
      const colorExists = "colors" in newChosenDays[currentId] && detailType in newChosenDays[currentId].colors;
      if (colorExists) delete newChosenDays[currentId].colors[detailType];
    }
    let errorsCounter = 0;
    dispatch(updateDays(newChosenDays));
    API.patchDays(newChosenDays)
      .then(null, () => {
        dispatch(updateDays(oldChosenDays));
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
          errorsCounter ? alert("Can't remove the schedule. Please contact the administrator.") : alert("Can't set the date of the last update. Please contact the administrator.");
        }
      );
  };
};

export const setColor = (color, chosenMondays) => {
  return (dispatch, getState) => {
    dispatch(showSavingIndicator());
    const oldDays = getState().days.days;
    const oldChosenMondays = {};
    const newChosenMondays = {};
    chosenMondays.forEach(monday => {
      if (!(monday.id in oldChosenMondays)) {
        oldChosenMondays[monday.id] = oldDays[monday.id];
        newChosenMondays[monday.id] = JSON.parse(JSON.stringify(oldChosenMondays[monday.id]));
      }
      if ("colors" in newChosenMondays[monday.id] && monday.type in newChosenMondays[monday.id].colors) {
        newChosenMondays[monday.id].colors[monday.type] = color;
      } else {
        newChosenMondays[monday.id].colors = {
          ...newChosenMondays[monday.id].colors,
          [monday.type]: color
        };
      }
    });
    let errorsCounter = 0;
    dispatch(updateDays(newChosenMondays));
    API.patchDays(newChosenMondays)
      .then(null, () => {
        dispatch(updateDays(oldChosenMondays));
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
          errorsCounter ? alert("Can't set the color. Please contact the administrator.") : alert("Can't set the date of the last update. Please contact the administrator.");
        }
      );
  };
};

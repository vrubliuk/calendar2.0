import * as actionTypes from "./actionTypes"

export const setLastUpdate = (date) => {
  return {
    type: actionTypes.SET_LAST_UPDATE,
    date
  }
}


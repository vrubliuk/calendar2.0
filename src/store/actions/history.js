import * as actionTypes from "./actionTypes"
import * as API from "../utility/endpoints" 

export const setLastUpdate = (date) => {
  return {
    type: actionTypes.SET_LAST_UPDATE,
    date
  }
}

export const getLastUpdate = () => {
  return dispatch => {
    API.getLastUpdate().then((res)=> {
      dispatch(setLastUpdate(res.data))
    })
  }
}

export const putLastUpdate = (date) => {
  return dispatch => {
    API.putLastUpdate(date).then((res)=> {
      dispatch(setLastUpdate(res.data))
    })
  }
}


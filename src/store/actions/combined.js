import * as API from "../utility/API";
import { setEmployees } from "./employees";
import { setLastUpdate } from "./history";
import {updateDays} from "./days"

export const fetchDatabase = () => {
  return dispatch => {
    Promise.all([API.getDays(), API.getEmployees(), API.getLastUpdate()]).then(res => {
      dispatch(updateDays(res[0].data));
      dispatch(setEmployees(res[1].data));
      dispatch(setLastUpdate(res[2].data));
    });
  };
};


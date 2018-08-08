import * as API from "../utility/endpoints";
import { setEmployees } from "./employees";
import { setLastUpdate } from "./history";

export const fetchDatabase = () => {
  return dispatch => {
    Promise.all([API.getEmployees(), API.getLastUpdate()]).then(res => {
      dispatch(setEmployees(res[0].data));
      dispatch(setLastUpdate(res[1].data));
    });
  };
};

import axios from "axios";
import { setEmployees } from "./employees";
import { setLastUpdate } from "./history";

const getEmployees = () => {
  return axios.get("https://calendar-0002.firebaseio.com/employees.json");
};

const putEmployees = employees => {
  return axios.put("https://calendar-0002.firebaseio.com/employees.json", employees);
};

const getLastUpdate = () => {
  return axios.get("https://calendar-0002.firebaseio.com/lastUpdate.json");
};

const putLastUpdate = date => {
  return axios.put("https://calendar-0002.firebaseio.com/lastUpdate.json", date);
};

export const fetchDatabase = () => {
  return dispatch => {
    Promise.all([getEmployees(), getLastUpdate()]).then(res => {
      dispatch(setEmployees(res[0].data));
      dispatch(setLastUpdate(res[1].data));
    });
  };
};

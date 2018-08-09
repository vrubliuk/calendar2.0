import axios from "axios";

export const getEmployees = () => {
  return axios.get("https://calendar-0002.firebaseio.com/employees.json");
};

export const putEmployees = (employees) => {
  return axios.put("https://calendar-0002.firebaseio.com/employees.json", employees);
};

export const getLastUpdate = () => {
  return axios.get("https://calendar-0002.firebaseio.com/lastUpdate.json");
};

export const putLastUpdate = (date) => {
  return axios.put("https://calendar-0002.firebaseio.com/lastUpdate.json", date);
};

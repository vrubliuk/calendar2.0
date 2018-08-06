import axios from "axios";

export const getEmployees = () => {
  return axios.get("https://calendar-0002.firebaseio.com/employees.json");
};

export const putEmployees = (employees) => {
  return axios.put("https://calendar-0002.firebaseio.com/employees.json", employees);
};

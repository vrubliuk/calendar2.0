import axios from "axios";

export const getDays = () => {
  return axios.get("https://calendar-0002.firebaseio.com/days.json");
}

export const patchDays = (days) => {
  return axios.patch("https://calendar-0002.firebaseio.com/days.json", days);
}

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

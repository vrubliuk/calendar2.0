import axios from "axios";

export const getDays = () => {
  return axios.get("https://calendar-0002.firebaseio.com/days.json");
}

export const patchDays = (token, days) => {
  return axios.patch(`https://calendar-0002.firebaseio.com/days.json?auth=${token}`, days);
}

export const getEmployees = () => {
  return axios.get("https://calendar-0002.firebaseio.com/employees.json");
};

export const putEmployees = (token, employees) => {
  return axios.put(`https://calendar-0002.firebaseio.com/employees.json?auth=${token}`, employees);
};

export const getLastUpdate = () => {
  return axios.get("https://calendar-0002.firebaseio.com/lastUpdate.json");
};

export const putLastUpdate = (token, date) => {
  return axios.put(`https://calendar-0002.firebaseio.com/lastUpdate.json?auth=${token}`, date);
};

export const postEmailPassword = (email, password) => {
  return axios.post("https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyDvnj1qm12fGIGWGsttWoMgHK254xT0nyw", {email, password, returnSecureToken: true})
}

import axios from "axios";
const apiUrl = "http://10.6.35.1:8000";

let masuk = ({ nik, password }) => {
  return axios
    .post(apiUrl + "/api/v1/login", { nik, password })
    .then(({ data }) => {
      localStorage.setItem("token", data);
      return data;
    });
};

export default masuk;

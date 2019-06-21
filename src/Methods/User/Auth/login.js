import axios from "axios";
const apiUrl = "http://10.6.35.1:8000/api/v1/login";

let masuk = ({ nik, password }) => {
  return axios
    .post(apiUrl, {
      nik,
      password
    })
    .then(({ data }) => {
      localStorage.setItem("token", data);
      return data;
    });
};

export default masuk;

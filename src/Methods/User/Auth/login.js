import axios from "axios";
import { api } from "../../api";

console.log("isi", api.akunUser);
let masuk = ({ nik, password }) => {
  return axios
    .post(api.akunUser + "/login", {
      nik,
      password
    })
    .then(({ data }) => {
      localStorage.setItem("token", data);
      return data;
    });
};

export default masuk;

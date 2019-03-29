import axios from "axios";
const apiURL = "http://10.6.35.1:8000";

let tambahUser = ({ nik, password, nama, email, akses }) => {
  return axios.post(apiURL + "/api/v1/akun-user", {
    nik,
    password,
    nama,
    email,
    akses
  });
};

export default tambahUser;

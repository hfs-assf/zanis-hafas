import axios from "axios";

const apiURL = "http://localhost:8000";

let editUser = ({ nik, password, nama, email, akses }) => {
  return axios.put(apiURL + "/api/v1/akun-user/" + nik, {
    nik,
    password,
    nama,
    email,
    akses
  });
};

export default editUser;

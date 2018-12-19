import axios from "axios";
import { baseUrl } from "../../api";

let tambahUser = ({ nik, password, nama, email, akses }) => {
  return axios.post(baseUrl + "/api/v1/akun-user", {
    nik,
    password,
    nama,
    email,
    akses
  });
};

export default tambahUser;

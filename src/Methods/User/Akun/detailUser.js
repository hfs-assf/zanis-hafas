import axios from "axios";
const apiURL = "http://192.168.100.250:8000";

let detailUser = nomor_rekam_medis => {
  return axios.get(apiURL + "/api/v1/akun-user/" + nomor_rekam_medis);
};

export default detailUser;
s;

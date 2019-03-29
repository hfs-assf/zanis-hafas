import axios from "axios";
const apiURL = "http://10.6.35.1:8000";

let detailUser = nomor_rekam_medis => {
  return axios.get(apiURL + "/api/v1/akun-user/" + nomor_rekam_medis);
};

export default detailUser;
s;

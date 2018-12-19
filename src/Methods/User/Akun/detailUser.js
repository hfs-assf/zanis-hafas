import axios from "axios";
import { baseUrl } from "../../api";

let detailUser = nomor_rekam_medis => {
  return axios.get(baseUrl + "/api/v1/akun-user/" + nomor_rekam_medis);
};

export default detailUser;
s;

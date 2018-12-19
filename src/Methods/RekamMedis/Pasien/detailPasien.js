import axios from "axios";
import { baseUrl } from "../../api";

let detailPasien = nomor_rekam_medis => {
  return axios.get(baseUrl + "/api/v1/pasien/" + nomor_rekam_medis);
};

export default detailPasien;

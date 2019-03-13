import axios from "axios";
const apiURL = "http://192.168.100.250:8002";

let detailPasien = nomor_rekam_medis => {
  return axios.get(apiURL + "/api/v1/pasien/" + nomor_rekam_medis);
};

export default detailPasien;

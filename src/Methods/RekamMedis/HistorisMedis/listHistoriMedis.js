import axios from "axios";

const apiURL = "http://10.6.35.1:8002";

let listHistoriMedis = nomor_rekam_medis => {
  return axios.get(apiURL + "/api/v1/histori-medis/" + nomor_rekam_medis);
};

export default listHistoriMedis;

import axios from "axios";

const apiURL = "http://10.6.35.1:8002";

let listHistoriMedis = no_rm => {
  return axios.get(apiURL + "/api/v1//pasien/" + no_rm);
};

export default listHistoriMedis;

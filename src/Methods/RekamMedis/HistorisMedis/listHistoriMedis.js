import axios from "axios";

const apiURL = "http://192.168.100.250:8002";

let listHistoriMedis = no_rm => {
  return axios.get(apiURL + "/api/v1//pasien/" + no_rm);
};

export default listHistoriMedis;

import axios from "axios";

const apiURL = "http://localhost:8002";

let listHistoriMedis = no_rm => {
  return axios.get(apiURL + "/api/v1/histori-medis/" + no_rm);
};

export default listHistoriMedis;

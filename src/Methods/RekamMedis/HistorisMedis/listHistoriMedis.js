import axios from "axios";
import { api } from "../../api";

let listHistoriMedis = nomor_rekam_medis => {
  return axios.get(api.rekamMedis + "/histori-medis/" + nomor_rekam_medis);
};

export default listHistoriMedis;

import axios from "axios";
import { api } from "../../api";

let detailPasien = nomor_rekam_medis => {
  return axios.get(`${api.rekamMedis}/pasien/${nomor_rekam_medis}`);
};

export default detailPasien;

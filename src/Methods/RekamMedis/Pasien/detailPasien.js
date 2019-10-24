import axios from "axios";
import { api } from "../../api";

let detailPasien = (nomor_rekam_medis, id_lokasi) => {
  return axios
    .get(`${api.rekamMedis}/pasien/${nomor_rekam_medis}?id_lokasi=${id_lokasi}`)
    .catch(err => err);
};

export default detailPasien;

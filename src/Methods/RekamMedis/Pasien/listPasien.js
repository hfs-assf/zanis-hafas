import axios from "axios";

import { api } from "../../api";

let listPasien = pencarian => {
  var filter = "";
  if (pencarian !== "") {
    filter = "?cari=" + pencarian;
  }
  return axios.get(`${api.rekamMedis}/pasien/${filter}?`);
};

export default listPasien;

export const cariPasien = (nama_pasien, id_lokasi) => {
  return axios.get(
    `${api.rekamMedis}/pasien?id_lokasi=${id_lokasi}&cari=${nama_pasien}`
  );
};

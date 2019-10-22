import axios from "axios";

import { api } from "../../api";

let listPasien = pencarian => {
  var filter = "";
  if (pencarian !== "") {
    filter = "?cari=" + pencarian;
  }
  return axios.get(`${api.rekamMedis}/pasien/${filter}`);
};

export default listPasien;

import axios from "axios";
const apiURL = "http://10.6.35.1:8002";

let listPasien = pencarian => {
  var filter = "";
  if (pencarian !== "") {
    filter = "?cari=" + pencarian;
  }
  return axios.get(apiURL + "/api/v1/pasien" + filter);
};

export default listPasien;

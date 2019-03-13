import axios from "axios";
const apiURL = "http://192.168.100.250:8002";

let listPasien = pencarian => {
  var filter = "";
  if (pencarian !== "") {
    filter = "?cari=" + pencarian;
  }
  return axios.get(apiURL + "/api/v1/pasien" + filter);
};

export default listPasien;

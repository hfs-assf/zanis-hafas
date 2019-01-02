import axios from "axios";
// import { baseUrl } from "../../api";
let apiURL = "www.a.com";

let listPasien = pencarian => {
  var filter = "";
  if (pencarian !== "") {
    filter = "?cari=" + pencarian;
  }
  return axios.get(apiURL + "/api/v1/pasien" + filter);
};

export default listPasien;

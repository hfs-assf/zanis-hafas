import axios from "axios";
// import { baseUrl } from "../../api";

let apiURL = "www.a.com";
let obatList = nama_obat => {
  var filter = "";
  if (nama_obat !== "") {
    filter = "?nama_obat=" + nama_obat;
  }
  return axios.get(apiURL + "/api/v1/obat" + filter);
};

export default obatList;

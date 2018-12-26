import axios from "axios";

const apiURL = "http://localhost:8005";

let obatList = nama_obat => {
  var filter = "";
  if (nama_obat !== "") {
    filter = "?nama_obat=" + nama_obat;
  }
  return axios.get(apiURL + "/api/v1/obat" + filter);
};

export default obatList;

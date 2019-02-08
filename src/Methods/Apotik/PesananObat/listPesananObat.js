import axios from "axios";
const apiURL = "http://localhost:8005";

let listPesananObat = status => {
  var filter = "";
  if (nama_obat !== "") {
    filter = "?status=" + status;
  }
  return axios.get(apiURL + "/api/v1/pesanan-obat" + filter);
};

export default listPesananObat;

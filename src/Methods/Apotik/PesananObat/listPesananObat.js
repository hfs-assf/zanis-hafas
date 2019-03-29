import axios from "axios";
const apiURL = "http://10.6.35.1:8005";

let listPesananObat = (uid, status) => {
  var filter = "";
  if (status !== "") {
    filter = "?status=" + status;
  } else if (uid !== "") {
    filter = "/" + uid;
  }
  return axios.get(apiURL + "/api/v1/pesanan-obat" + filter);
};

export default listPesananObat;

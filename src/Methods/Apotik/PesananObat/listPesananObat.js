// import axios from "axios";
// const apiURL = "http://10.6.35.1:8005";

// let listPesananObat = (uid, status) => {
//   var filter = "";
//   if (status !== "") {
//     filter = "?status=" + status;
//   } else if (uid !== "") {
//     filter = "/" + uid;
//   }
//   return axios.get(apiURL + "/api/v1/pesanan-obat" + filter);
// };

// export default listPesananObat;

import axios from "axios";
const apiURL = "http://10.6.35.1:8005";

const listPesananObat = status => {
  return axios.get(apiURL + "/api/v1/pesanan-obat?status_pesanan=" + status);
};

export default listPesananObat;

// export const listPesananObatByStatus = statusPesanan =>
//   axios.get(apiURL + "/api/v1/pesanan-obat?status_pesanan=" + statusPesanan);

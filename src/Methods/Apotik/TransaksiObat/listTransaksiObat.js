import axios from "axios";
const apiURL = "http://192.168.100.250:8005";

let listTransaksiObat = pencarian => {
  var filter = "";
  pencarian !== "" ? (filter = "?nik_karyawan=" + pencarian) : (filter = "");
  return axios.get(apiURL + "/api/v1/transaksi-obat" + filter);
};

export default listTransaksiObat;

// import axios from "axios";
// const apiURL = "http://192.168.100.250:8005";

// let listTransaksiObat = uid => {
//   axios.get(apiURL + "api/v1/transaksi-obat" + uid);
// };

// export default listTransaksiObat;

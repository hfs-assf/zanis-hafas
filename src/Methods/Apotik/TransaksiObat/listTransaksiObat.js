import axios from "axios";
const apiURL = "http://localhost:8005";

let listTransaksiObat = pencarian => {
  var filter = "";
  pencarian !== "" ? (filter = "?nik_karyawan=" + pencarian) : (filter = "");
  return axios.get(apiURL + "/api/v1/transaksi-obat" + filter);
};

export default listTransaksiObat;

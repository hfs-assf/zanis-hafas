import axios from "axios";
const apiURL = "http://10.6.35.1:8005";

let listTransaksiObat = () => {
  // var filter = "";
  // pencarian !== "" ? (filter = "?nik_karyawan=" + pencarian) : (filter = "");
  return axios.get(apiURL + "/api/v1/transaksi-obat");
};

export default listTransaksiObat;

// import axios from "axios";
// const apiURL = "http://192.168.100.250:8005";

// let listTransaksiObat = uid => {
//   axios.get(apiURL + "api/v1/transaksi-obat" + uid);
// };

// export default listTransaksiObat;

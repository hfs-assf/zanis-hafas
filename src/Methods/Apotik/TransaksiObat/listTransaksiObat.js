import axios from "axios";
import { api } from "../../api";

// let listTransaksiObat = () => {
//   return axios.get(api.apotik + "/transaksi-obat");
// };

let listTransaksiObat = pencarian => {
  var filter = "";
  pencarian !== "" ? (filter = "?nama_obat=" + pencarian) : (filter = "");
  return axios.get(`${api.apotik}/transaksi-obat/${filter}`);
};

export default listTransaksiObat;

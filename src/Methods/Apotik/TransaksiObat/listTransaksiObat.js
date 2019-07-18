import axios from "axios";
import { api } from "../../api";

let listTransaksiObat = () => {
  return axios.get(api.apotik + "/transaksi-obat");
};

export default listTransaksiObat;

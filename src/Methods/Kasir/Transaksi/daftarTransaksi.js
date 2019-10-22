import axios from "axios";
import { api } from "../../api";

const daftarTransaksi = waktu_transaksi =>
  axios.get(
    `${api.kasir}"/transaksi-harian/?tanggal_transaksi=${waktu_transaksi}`
  );

export default daftarTransaksi;

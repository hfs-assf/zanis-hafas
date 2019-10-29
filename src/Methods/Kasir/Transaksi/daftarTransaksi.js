import axios from "axios";
import { api } from "../../api";

const daftarTransaksi = (id_lokasi, waktu_transaksi) =>
  axios.get(
    `${api.kasir}/transaksi-harian/?id_lokasi=${id_lokasi}&tanggal_transaksi=${waktu_transaksi}`
  );

export default daftarTransaksi;

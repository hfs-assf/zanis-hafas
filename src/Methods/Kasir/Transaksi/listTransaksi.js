import axios from "axios";
import { api } from "../../api";

const listTransaksi = id_lokasi =>
  axios
    .get(`${api.kasir}/transaksi?id_lokasi=${id_lokasi}&status_pesanan=PENDING`)
    .catch(err => err);

export default listTransaksi;

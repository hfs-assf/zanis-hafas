import axios from "axios";
import { api } from "../../api";

const listTransaksi = id_lokasi =>
  axios
    .get(
      `${api.kasir}/transaksi?status_transaksi=PENDING&id_lokasi=${id_lokasi}`
    )
    .catch(err => err);

export default listTransaksi;

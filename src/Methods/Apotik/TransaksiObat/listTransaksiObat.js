import axios from "axios";
import { api } from "../../api";

let listTransaksiObat = (id_lokasi, mulai_tanggal, sampai_tanggal) => {
  return axios.get(
    `${api.apotik}/transaksi-obat/?id_lokasi=${id_lokasi}&mulai_tanggal=${mulai_tanggal}&sampai_tanggal=${sampai_tanggal}`
  );
};

export default listTransaksiObat;

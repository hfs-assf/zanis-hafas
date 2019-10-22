import axios from "axios";
import { api } from "../../api";

let tambahTransaksi = ({
  nik_penerbit,
  id_lokasi,
  nomor_rekam_medis,
  penjamin,
  jenis_pembayaran
}) => {
  return axios.post(`${api.kasir}/transaksi`, {
    nik_penerbit,
    id_lokasi,
    nomor_rekam_medis,
    penjamin,
    jenis_pembayaran
  });
};

export default tambahTransaksi;

import axios from "axios";
import { api } from "../../api";

let transaksiBelanja = ({
  nik_penerbit,
  id_lokasi,
  nomor_rekam_medis,
  penjamin,
  jenis_pembayaran,
  detailTransaksi
}) => {
  console.log({
    nik_penerbit,
    id_lokasi,
    nomor_rekam_medis,
    penjamin,
    jenis_pembayaran,
    detailTransaksi
  });
  return axios.post(`${api.kasir}/transaksi-belanja`, {
    nik_penerbit,
    id_lokasi,
    nomor_rekam_medis,
    penjamin,
    jenis_pembayaran,
    detailTransaksi
  });
};

export default transaksiBelanja;

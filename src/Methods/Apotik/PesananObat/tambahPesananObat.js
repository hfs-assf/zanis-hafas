import axios from "axios";
import { api } from "../../api";

let tambahPesananObat = ({
  nik_dokter,
  nomor_rekam_medis,
  detail_pesanan_obat,
  id_lokasi
}) => {
  return axios.post(`${api.apotik}/pesanan-obat`, {
    nik_dokter,
    nomor_rekam_medis,
    detail_pesanan_obat,
    id_lokasi
  });
};

export default tambahPesananObat;

import axios from "axios";
import { api } from "../../api";

let tambahPesananObat = ({
  nik_dokter,
  nomor_rekam_medis,
  detail_pesanan_obat
}) => {
  return axios.post(api.apotik + "/pesanan-obat", {
    nik_dokter,
    nomor_rekam_medis,
    detail_pesanan_obat
  });
};

export default tambahPesananObat;

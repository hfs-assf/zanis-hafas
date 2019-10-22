import axios from "axios";
import { api } from "../../api";

let tambahAntrian = ({
  nomor_rekam_medis,
  poli,
  jaminan,
  dokter,
  id_lokasi
}) => {
  return axios.post(`${api.pendaftaran}/antrian`, {
    nomor_rekam_medis,
    poli,
    jaminan,
    dokter,
    id_lokasi
  });
};

export default tambahAntrian;

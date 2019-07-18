import axios from "axios";
import { api } from "../../api";
const apiURL = "http://10.6.35.1:8002";

let tambahHistoriMedis = ({
  nomor_rekam_medis,
  nik_dokter,
  subjektif,
  objektif,
  analisa,
  diagnosa,
  jenis_perawatan,
  penjamin,
  tindakan,
  catatan
}) => {
  return axios.post(api.rekamMedis + "/histori-medis/" + nomor_rekam_medis, {
    nik_dokter,
    subjektif,
    objektif,
    analisa,
    diagnosa,
    jenis_perawatan,
    penjamin,
    tindakan,
    catatan
  });
};

export default tambahHistoriMedis;

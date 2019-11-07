import axios from "axios";
import { api } from "../../api";

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
  catatan,
  nama_terapis,
  id_lokasi
}) => {
  console.log({ id_lokasi });
  return axios.post(`${api.rekamMedis}/histori-medis/${nomor_rekam_medis}`, {
    nik_dokter,
    subjektif,
    objektif,
    analisa,
    diagnosa,
    jenis_perawatan,
    penjamin,
    tindakan,
    catatan,
    nama_terapis,
    id_lokasi
  });
};

export default tambahHistoriMedis;

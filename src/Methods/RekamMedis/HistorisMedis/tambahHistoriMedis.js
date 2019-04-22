import axios from "axios";

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
  return axios.post(apiURL + "/api/v1/histori-medis/" + nomor_rekam_medis, {
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
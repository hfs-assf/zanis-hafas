import axios from "axios";

const apiURL = "http://localhost:8002";

let tambahHistoriMedis = ({
  nomor_rekam_medis,
  nik_dokter,
  subjektif,
  objektif,
  analisa,
  diagnosa,
  jenis_perawatan,
  penjamin,
  tindakan
}) => {
  return axios.post(apiURL + "/api/v1/histori-medis/" + nomor_rekam_medis, {
    nik_dokter,
    subjektif,
    objektif,
    analisa,
    diagnosa,
    jenis_perawatan,
    penjamin,
    tindakan
  });
  // console.log(subjektif);
};

export default tambahHistoriMedis;

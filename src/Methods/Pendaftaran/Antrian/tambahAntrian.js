import axios from "axios";

const apiURL = "http://192.168.100.250:8001";

let tambahAntrian = ({ nomor_rekam_medis, poli, jaminan, dokter }) => {
  return axios.post(apiURL + "/api/v1/antrian", {
    nomor_rekam_medis,
    poli,
    jaminan,
    dokter
  });
};

export default tambahAntrian;

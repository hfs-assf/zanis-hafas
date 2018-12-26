import axios from "axios";

const apiURL = "http://localhost:8001";

let tambahAntrian = ({ nomor_rekam_medis, poli }) => {
  return axios.post(apiURL + "/api/v1/antrian", {
    nomor_rekam_medis,
    poli
  });
};

export default tambahAntrian;

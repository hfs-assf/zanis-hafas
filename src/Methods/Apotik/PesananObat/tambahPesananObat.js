import axios from "axios";
const apiURL = "http://localhost:8005";

let tambahPesananObat = ({ uid_obat, nomor_rekam_medis }) => {
  return axios.post(apiURL + "/api/v1/pesanan-obat", {
    uid_obat,
    nomor_rekam_medis
  });
};

export default tambahPesananObat;

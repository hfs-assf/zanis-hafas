import axios from "axios";
const apiURL = "http://10.6.35.1:8005";

let tambahPesananObat = ({
  nik_dokter,
  nomor_rekam_medis,
  detail_pesanan_obat
}) => {
  return axios.post(apiURL + "/api/v1/pesanan-obat", {
    nik_dokter,
    nomor_rekam_medis,
    detail_pesanan_obat
  });
};

export default tambahPesananObat;

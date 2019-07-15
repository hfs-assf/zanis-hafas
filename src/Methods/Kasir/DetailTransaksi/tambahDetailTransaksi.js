import axios from "axios";

const apiURL = "http://10.6.35.1:8004";

let tambahDetailTransaksi = ({ nomor_rekam_medis, listDetail }) => {
  console.log("kirim ya", { nomor_rekam_medis, listDetail });
  return axios.post(apiURL + "/api/v1/detail-transaksi", {
    nomor_rekam_medis,
    listDetail
  });
};

export default tambahDetailTransaksi;

import axios from "axios";
import { api } from "../../api";

let tambahDetailTransaksi = ({ nomor_rekam_medis, listDetail }) => {
  console.log({
    nomor_rekam_medis,
    listDetail
  });
  return axios.post(`${api.kasir}/detail-transaksi`, {
    nomor_rekam_medis,
    listDetail
  });
};

export default tambahDetailTransaksi;

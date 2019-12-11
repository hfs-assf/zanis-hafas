import axios from "axios";
import { api } from "../../api";

let TambahTransaksiPuyer = ({ uid_pesanan, nomor_rekam_medis }) => {
  return axios.post(`${api.apotik}/racik-ke-kasir/`, {
    uid_pesanan,
    nomor_rekam_medis
  });
};

export default TambahTransaksiPuyer;

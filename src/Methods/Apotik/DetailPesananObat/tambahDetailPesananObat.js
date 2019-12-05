import axios from "axios";
import { api } from "../../api";

let tambahDetailPesananObat = ({
  uid_pesanan,
  uid_obat,
  jumlah_obat,
  keterangan
}) => {
  return axios.post(`${api.apotik}/detail-pesanan-obat`, {
    uid_pesanan,
    uid_obat,
    jumlah_obat,
    keterangan
  });
};

export default tambahDetailPesananObat;

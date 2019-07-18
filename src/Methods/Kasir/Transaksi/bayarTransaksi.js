import axios from "axios";
import { api } from "../../api";

const bayarTransaksi = ({ uid_transaksi, status, nik_kasir }) => {
  return axios.put(api.kasir + `/transaksi/${uid_transaksi}`, {
    status,
    nik_kasir
  });
};

export default bayarTransaksi;

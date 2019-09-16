import axios from "axios";
import { api } from "../../api";

const bayarTransaksi = ({
  uid_transaksi,
  status,
  nik_kasir,
  nomor_rekam_medis,
  diskon,
  total
}) => {
  console.log({
    uid_transaksi,
    status,
    nik_kasir,
    nomor_rekam_medis,
    diskon,
    total
  });
  return axios.put(api.kasir + `/transaksi/${uid_transaksi}`, {
    uid_transaksi,
    status,
    nik_kasir,
    nomor_rekam_medis,
    diskon,
    total
  });
};

export default bayarTransaksi;

import axios from "axios";
const apiURL = "http://10.6.35.1:8004";

const bayarTransaksi = ({ uid_transaksi, status, nik_kasir }) => {
  return axios.put(apiURL + `/api/v1/transaksi/${uid_transaksi}`, {
    status,
    nik_kasir
  });
};

export default bayarTransaksi;

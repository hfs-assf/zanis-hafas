import axios from "axios";
const apiURL = "http://10.6.35.1:8004";

const listTransaksi = status_transaksi =>
  axios.get(apiURL + "/api/v1/transaksi?search=pending" + status_transaksi);

export default listTransaksi;

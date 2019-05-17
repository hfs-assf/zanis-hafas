import axios from "axios";
const apiURL = "http://10.6.35.1:8004";

const listTransaksi = statusTransaksi =>
  axios.get(apiURL + "/api/v1/transaksi?search=pending" + statusTransaksi);

export default listTransaksi;

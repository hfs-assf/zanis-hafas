import axios from "axios";
const apiURL = "http://10.6.35.1:8004";

const listTransaksi = status =>
  axios.get(apiURL + "/api/v1/transaksi/" + status);

export default listTransaksi;

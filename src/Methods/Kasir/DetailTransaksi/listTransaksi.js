import axios from "axios";
const apiURL = "http://10.6.35.1:8004";

const listTransaksi = uid => {
  return axios.get(apiURL + "/api/v1/detail-transaksi/" + uid);
};

export default listTransaksi;

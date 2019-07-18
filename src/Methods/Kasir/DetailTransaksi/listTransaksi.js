import axios from "axios";
import { api } from "../../api";

const listTransaksi = uid => {
  return axios.get(api.kasir + "/detail-transaksi/" + uid);
};

export default listTransaksi;

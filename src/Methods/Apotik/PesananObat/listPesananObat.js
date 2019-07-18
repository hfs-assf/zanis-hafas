import axios from "axios";
import { api } from "../../api";

const listPesananObat = status => {
  return axios.get(api.apotik + "/pesanan-obat?status_pesanan=" + status);
};

export default listPesananObat;

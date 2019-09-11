import axios from "axios";
import { api } from "../../api";

let hapusDetailPesanan = uid => {
  return axios.delete(api.apotik + "/detail-pesanan-obat/" + uid);
};

export default hapusDetailPesanan;

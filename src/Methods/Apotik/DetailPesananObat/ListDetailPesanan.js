import axios from "axios";
import { api } from "../../api";
let ListDetailPesananObat = uid =>
  axios.get(`${api.apotik}/detail-pesanan-obat/${uid}`);

export default ListDetailPesananObat;

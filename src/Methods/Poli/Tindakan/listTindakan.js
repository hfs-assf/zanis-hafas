import axios from "axios";
import { api } from "../../api";

let listTindakan = uid => {
  return axios.get(api.poli + "/tindakan?limit=20&nama_tindakan=" + uid);
};

export default listTindakan;

import axios from "axios";
import { api } from "../../api";

let listTindakan = id_lokasi => {
  // return axios.get(api.poli + "/tindakan?limit=20&nama_tindakan=" + uid);
  return axios.get(`${api.poli}/tindakan?id_lokasi=${id_lokasi}`);
};

export default listTindakan;

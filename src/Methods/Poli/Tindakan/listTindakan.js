import axios from "axios";
import { api } from "../../api";

let listTindakan = (cari, id_lokasi) => {
  // return axios.get(api.poli + "/tindakan?limit=20&nama_tindakan=" + uid);
  return axios.get(`${api.poli}/tindakan?id_lokasi=${id_lokasi}&cari=${cari}`);
};

export default listTindakan;

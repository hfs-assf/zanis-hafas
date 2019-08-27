import axios from "axios";
import { api } from "../../api";

let listAntrian = () => {
  // return axios.get(api.pendaftaran + "/antrian?id_lokasi=" + id);
  return axios.get(api.pendaftaran + "/antrian");
};

export default listAntrian;

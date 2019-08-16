import axios from "axios";
import { api } from "../../api";

let listTerapis = tanggal => {
  return axios.get(api.rekamMedis + "/list-terapis/" + tanggal);
};

export default listTerapis;

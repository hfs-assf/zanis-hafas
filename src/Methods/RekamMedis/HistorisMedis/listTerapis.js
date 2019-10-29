import axios from "axios";
import { api } from "../../api";

let listTerapis = id_lokasi => {
  return axios.get(`${api.rekamMedis}/list-terapis/${id_lokasi}`);
};

export default listTerapis;

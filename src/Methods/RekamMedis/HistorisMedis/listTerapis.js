import axios from "axios";
import { api } from "../../api";

let listTerapis = () => {
  return axios.get(`${api.rekamMedis}/list-terapis`);
};

export default listTerapis;

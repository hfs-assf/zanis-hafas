import axios from "axios";
import { api } from "../../api";

const listKlinik = uid => {
  return axios.get(api.akunUser + "/lokasi/" + uid);
};

export default listKlinik;

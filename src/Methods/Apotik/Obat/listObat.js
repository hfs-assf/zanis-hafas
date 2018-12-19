import axios from "axios";
import { baseUrl } from "../../api";

let listObat = () => {
  return axios.get(baseUrl + "/api/v1/obat");
};

export default listObat;

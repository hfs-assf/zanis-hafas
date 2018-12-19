import axios from "axios";
import { baseUrl } from "../../api";

let listPasien = () => {
  return axios.get(baseUrl + "/api/v1/pasien");
};

export default listPasien;

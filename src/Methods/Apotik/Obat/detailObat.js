import axios from "axios";
import { baseUrl } from "../../api";

let detailObat = uid => {
  return axios.get(baseUrl + "/api/v1/obat/" + uid);
};

export default detailObat;

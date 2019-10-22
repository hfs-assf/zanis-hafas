import axios from "axios";
import { api } from "../../api";

let detailTindakan = uid => {
  return axios.get(`${api.poli}"/tindakan/"${uid}`);
};

export default detailTindakan;

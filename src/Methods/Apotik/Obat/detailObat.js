import axios from "axios";
import { api } from "../../api";

let detailObat = uid => {
  return axios.get(api.apotik + "/obat/" + uid);
};

export default detailObat;

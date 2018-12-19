import axios from "axios";
import { baseUrl } from "../../api";

let hapusObat = uid => {
  return axios.delete(baseUrl + "/api/v1/obat/" + uid, {
    headers: { Authorization: "token" }
  });
};

export default hapusObat;

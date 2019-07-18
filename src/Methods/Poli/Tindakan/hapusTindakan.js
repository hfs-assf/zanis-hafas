import axios from "axios";
import { api } from "../../api";

let hapusTindakan = uid => {
  return axios.delete(api.poli + "/tindakan/" + uid, {
    headers: { Authorization: "token" }
  });
};

export default hapusTindakan;

import axios from "axios";
import { api } from "../../api";

let editStatusAntrian = (uid, status) => {
  return axios.put(
    `${api.pendaftaran}/antrian/${uid}?status_antrian=${status}`
  );
};

export default editStatusAntrian;

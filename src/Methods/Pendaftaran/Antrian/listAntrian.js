import axios from "axios";
import { api } from "../../api";

let listAntrian = uid => {
  var cari = uid !== null ? "?uid=" + uid : null;
  return axios.get(api.pendaftaran + "/antrian" + cari);
};

export default listAntrian;

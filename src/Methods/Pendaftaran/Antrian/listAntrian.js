import axios from "axios";
import { api } from "../../api";

let listAntrian = (status, uid) => {
  const cari = uid !== null ? uid : null;
  return axios.get(
    api.pendaftaran + "/antrian?status_antrian=menunggu&uid=" + cari
  );
};

export default listAntrian;

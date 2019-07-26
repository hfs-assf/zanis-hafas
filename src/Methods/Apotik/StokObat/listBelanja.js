import axios from "axios";
import { api } from "../../api";

let listBelanja = nama_obat => {
  return axios.get(
    api.apotik + "/list-stok-obat?limit=20&nama_obat=" + nama_obat
  );
};

export default listBelanja;

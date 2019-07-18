import axios from "axios";
import { api } from "../../api";

let listStokObat = uid => {
  return axios.get(api.apotik + "/stok-obat/" + uid);
};

export default listStokObat;

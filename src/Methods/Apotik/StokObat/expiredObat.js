import axios from "axios";
import { api } from "../../api";

let expiredObat = kadaluarsa => {
  return axios.get(api.apotik + "/stok-obat-kadaluarsa/" + kadaluarsa);
};

export default expiredObat;

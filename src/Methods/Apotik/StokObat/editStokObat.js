import axios from "axios";
import { api } from "../../api";

let editStokObat = ({ uid, stok, harga_modal, kadaluarsa, harga_jual }) => {
  return axios.put(api.apotik + "/stok-obat/" + uid, {
    stok,
    harga_modal,
    kadaluarsa,
    harga_jual
  });
};

export default editStokObat;

import axios from "axios";
import { baseUrl } from "../../api";

let tambahStokObat = ({ uid, stok, kadaluarsa, nik_penerima, harga_modal }) => {
  return axios.post(baseUrl + "/api/v1/stok-obat" + uid, {
    stok,
    kadaluarsa,
    nik_penerima,
    harga_modal
  });
};

export default tambahStokObat;

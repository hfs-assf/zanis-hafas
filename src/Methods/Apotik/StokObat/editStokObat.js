import axios from "axios";

const apiURL = "http://10.6.35.1:8005";

let editStokObat = ({ uid, stok, harga_modal, kadaluarsa, harga_jual }) => {
  return axios.put(apiURL + "/api/v1/stok-obat/" + uid, {
    stok,
    harga_modal,
    kadaluarsa,
    harga_jual
  });
};

export default editStokObat;

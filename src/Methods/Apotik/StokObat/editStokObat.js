import axios from "axios";

const apiURL = "http://192.168.100.250:8005";

let editStokObat = ({ uid, stok, harga_modal, kadaluarsa }) => {
  return axios.put(apiURL + "/api/v1/stok-obat/" + uid, {
    stok,
    harga_modal,
    kadaluarsa
  });
};

export default editStokObat;

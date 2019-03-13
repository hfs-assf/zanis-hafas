import axios from "axios";

const apiURL = "http://192.168.100.250:8005";

let tambahStokObat = ({ uid, stok, kadaluarsa, nik_penerima, harga_modal }) => {
  return axios.post(apiURL + "/api/v1/stok-obat/" + uid, {
    stok,
    kadaluarsa,
    nik_penerima,
    harga_modal
  });
};

export default tambahStokObat;

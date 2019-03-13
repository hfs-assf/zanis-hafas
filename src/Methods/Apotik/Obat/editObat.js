import axios from "axios";
const apiURL = "http://192.168.100.250:8005";

let editObat = ({ uid, nama_obat, minimal_stok, satuan, kategori }) => {
  return axios.put(apiURL + "/api/v1/obat/" + uid, {
    nama_obat,
    minimal_stok,
    satuan,
    kategori
  });
};

export default editObat;

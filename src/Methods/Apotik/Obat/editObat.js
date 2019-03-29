import axios from "axios";
const apiURL = "http://10.6.35.1:8005";

let editObat = ({ uid, nama_obat, minimal_stok, satuan, kategori }) => {
  return axios.put(apiURL + "/api/v1/obat/" + uid, {
    nama_obat,
    minimal_stok,
    satuan,
    kategori
  });
};

export default editObat;

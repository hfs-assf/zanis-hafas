import axios from "axios";
let apiURL = "www.a.com";

let editObat = ({ uid, nama_obat, minimal_stok, satuan, kategori }) => {
  return axios.put(apiURL + "/api/v1/obat/" + uid, {
    nama_obat,
    minimal_stok,
    satuan,
    kategori
  });
};

export default editObat;

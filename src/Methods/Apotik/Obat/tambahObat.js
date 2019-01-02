import axios from "axios";
let apiURL = "www.a.com";

let tambahObat = ({ nama_obat, minimal_stok, satuan, kategori }) => {
  return axios.post(apiURL + "/api/v1/obat", {
    nama_obat,
    minimal_stok,
    satuan,
    kategori
  });
};

export default tambahObat;

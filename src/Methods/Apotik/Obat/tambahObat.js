import axios from "axios";
const apiURL = "http://10.6.35.1:8005";

let tambahObat = ({ nama_obat, minimal_stok, satuan, kategori }) => {
  return axios.post(apiURL + "/api/v1/obat", {
    nama_obat,
    minimal_stok,
    satuan,
    kategori
  });
};

export default tambahObat;

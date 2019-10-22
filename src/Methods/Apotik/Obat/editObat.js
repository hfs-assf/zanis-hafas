import axios from "axios";
import { api } from "../../api";

let editObat = ({ uid, nama_obat, minimal_stok, satuan, kategori }) => {
  return axios.put(`${api.apotik}/obat/${uid}`, {
    nama_obat,
    minimal_stok,
    satuan,
    kategori
  });
};

export default editObat;

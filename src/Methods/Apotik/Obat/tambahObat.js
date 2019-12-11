import axios from "axios";
import { api } from "../../api";

let tambahObat = ({ nama_obat, minimal_stok, satuan, kategori, id_lokasi }) => {
  return axios.post(`${api.apotik}/obat`, {
    nama_obat,
    minimal_stok,
    satuan,
    kategori,
    id_lokasi
  });
};

export default tambahObat;

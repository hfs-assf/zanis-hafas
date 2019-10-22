import axios from "axios";
import { api } from "../../api";

let listBelanja = (nama_obat, id_lokasi) => {
  return axios.get(
    `${api.apotik}/list-stok-obat/${nama_obat}?id_lokasi=${id_lokasi}`
  );
};

export default listBelanja;

import axios from "axios";
import { api } from "../../api";

let listBelanja = (nama_obat, id_lokasi) => {
  return axios.get(
    api.apotik +
      "/list-stok-obat?limit=15&nama_obat=" +
      nama_obat +
      "?id_lokasi" +
      id_lokasi
  );
};

export default listBelanja;

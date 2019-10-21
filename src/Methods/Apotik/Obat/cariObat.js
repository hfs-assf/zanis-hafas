import axios from "axios";
import { api } from "../../api";

let cariObat = (nama_obat, id_lokasi) =>
  axios.get(
    api.apotik +
      "/cari-obat?limit=15&cari=" +
      nama_obat +
      "&id_lokasi=" +
      id_lokasi
  );

export default cariObat;

export const jmlObat = () => axios.get(api.apotik + "/cari-obat");

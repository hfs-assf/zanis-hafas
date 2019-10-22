import axios from "axios";
import { api } from "../../api";

let cariObat = (nama_obat, id_lokasi) =>
  axios.get(
    `${api.apotik}/cari-obat?limit=15&id_lokasi=${id_lokasi}&cari=${nama_obat}`
  );

export default cariObat;

export const jmlObat = () => axios.get(api.apotik + "/cari-obat");

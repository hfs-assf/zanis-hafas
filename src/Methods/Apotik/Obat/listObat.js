import axios from "axios";
import { api } from "../../api";
let obatList = (nama_obat, id_lokasi) =>
  axios.get(
    `${api.apotik}/obat?limit=15&id_lokasi=${id_lokasi}&cari=${nama_obat}`
  );

export default obatList;

export const obat = id_lokasi =>
  axios.get(`${api.apotik}/obat?id_lokasi=${id_lokasi}`);

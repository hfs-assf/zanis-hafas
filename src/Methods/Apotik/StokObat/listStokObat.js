import axios from "axios";
import { api } from "../../api";

let listStokObat = (uid, id_lokasi) => {
  return axios.get(`${api.apotik}/stok-obat/${uid}?id_lokasi=${id_lokasi}`);
};
export default listStokObat;

export const lsObat = id_lokasi => {
  return axios.get(`${api.apotik}/stok-obat?id_lokasi=${id_lokasi}`);
};

export let cariStokObat = (nama_obat, id_lokasi) => {
  return axios.get(
    `${api.apotik}/stok-obat?id_lokasi=${id_lokasi}&cari=${nama_obat}`
  );
};

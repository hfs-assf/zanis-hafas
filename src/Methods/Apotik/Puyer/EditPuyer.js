import axios from "axios";
import { api } from "../../api";

let editPuyer = ({ uid, nik_karyawan, id_lokasi, listDetail }) => {
  console.log("miaww", {
    uid,
    nik_karyawan,
    id_lokasi,
    listDetail
  });
  return axios.put(`${api.apotik}/harga-racik/${uid}`, {
    nik_karyawan,
    id_lokasi,
    listDetail
  });
};

export default editPuyer;

import axios from "axios";
import { api } from "../../api";

let kurangStokBelanja = ({ nik_karyawan, listDetail, id_lokasi }) => {
  console.log({
    nik_karyawan,
    listDetail,
    id_lokasi
  });
  return axios.patch(`${api.apotik}/stok-obat`, {
    nik_karyawan,
    listDetail,
    id_lokasi
  });
};

export default kurangStokBelanja;

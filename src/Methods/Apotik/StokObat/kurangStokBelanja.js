import axios from "axios";
import { api } from "../../api";

let kurangStokBelanja = ({ nik_karyawan, listDetail }) => {
  console.log({
    nik_karyawan,
    listDetail
  });
  return axios.patch(api.apotik + "/stok-obat", {
    nik_karyawan,
    listDetail
  });
};

export default kurangStokBelanja;

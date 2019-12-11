import axios from "axios";
import { api } from "../../api";

let kurangStokObat = (uid_pesanan, id_lokasi, nik_karyawan) => {
  return axios.put(
    `${api.apotik}/kurang-stok-obat/${uid_pesanan}?id_lokasi=${id_lokasi}&nik_karyawan=${nik_karyawan}`
  );
};

export default kurangStokObat;

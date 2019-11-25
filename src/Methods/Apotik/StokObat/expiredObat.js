import axios from "axios";
import { api } from "../../api";

let expiredObat = (kadaluarsa, id_lokasi) => {
  return axios.get(
    `${api.apotik}/stok-obat-kadaluarsa/${kadaluarsa}?id_lokasi=${id_lokasi}`
  );
};

export default expiredObat;

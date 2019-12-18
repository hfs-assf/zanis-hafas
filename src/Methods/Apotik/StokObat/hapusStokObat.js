import axios from "axios";
import { api } from "../../api";

let hapusStokObat = (uid, id_lokasi) => {
  return axios.delete(`${api.apotik}/stok-obat/${uid}?id_lokasi=${id_lokasi}`, {
    headers: { Authorization: "token" }
  });
};

export default hapusStokObat;

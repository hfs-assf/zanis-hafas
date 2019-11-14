import axios from "axios";
import { api } from "../../api";

const listPesananObat = id_lokasi => {
  return axios.get(
    `${api.apotik}/pesanan-obat?status_pesanan=MENUNGGU&limit=10&id_lokasi=${id_lokasi}`
  );
};

export default listPesananObat;

import axios from "axios";
import { api } from "../../api";

let nomorTransaksi = (nomor_rekam_medis, id_lokasi) => {
  return axios.put(
    `${api.kasir}/nomor-transaksi/${nomor_rekam_medis}?id_lokasi=${id_lokasi}`
  );
};

export default nomorTransaksi;

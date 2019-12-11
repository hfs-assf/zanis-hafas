import axios from "axios";
import { api } from "../../api";

let nomorTransaksi = (nomor_rm, id_lokasi) => {
  return axios.put(
    `${api.kasir}/nomor-transaksi/${nomor_rm}?id_lokasi=${id_lokasi}`
  );
};

export default nomorTransaksi;

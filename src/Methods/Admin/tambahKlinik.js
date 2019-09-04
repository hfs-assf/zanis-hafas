import axios from "axios";
import { api } from "../../api";

let tambahKlinik = ({ nama_tindakan, biaya_tindakan, jenis, id_lokasi }) => {
  console.log({
    nama_tindakan,
    biaya_tindakan,
    jenis,
    id_lokasi
  });
  return axios.post(api.akunUser + "/lokasi", {
    nama_tindakan,
    biaya_tindakan,
    jenis,
    id_lokasi
  });
};

export default tambahKlinik;

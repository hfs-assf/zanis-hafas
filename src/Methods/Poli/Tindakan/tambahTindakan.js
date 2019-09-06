import axios from "axios";
import { api } from "../../api";

let tambahTindakan = ({ nama_tindakan, biaya_tindakan, jenis, id_lokasi }) => {
  return axios.post(api.poli + "/tindakan", {
    nama_tindakan,
    biaya_tindakan,
    jenis,
    id_lokasi
  });
};

export default tambahTindakan;

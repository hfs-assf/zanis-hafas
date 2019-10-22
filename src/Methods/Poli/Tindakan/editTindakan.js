import axios from "axios";
import { api } from "../../api";

let editTindakan = ({ uid, nama_tindakan, biaya_tindakan, jenis }) => {
  return axios.put(`${api.poli}/tindakan/${uid}`, {
    nama_tindakan,
    biaya_tindakan,
    jenis
  });
};

export default editTindakan;

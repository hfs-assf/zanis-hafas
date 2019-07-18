import axios from "axios";
import { api } from "../../api";

let tambahTindakan = ({ nama_tindakan, biaya_tindakan, jenis }) => {
  return axios.post(api.poli + "/tindakan", {
    nama_tindakan,
    biaya_tindakan,
    jenis
  });
};

export default tambahTindakan;

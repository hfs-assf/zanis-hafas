import axios from "axios";
import { baseUrl } from "../../api";

let editObat = ({ uid, nama_obat, batas_minimum, satuan }) => {
  return axios.put(baseUrl + "/api/v1/obat/" + uid, {
    nama_obat,
    batas_minimum,
    satuan
  });
};

export default editObat;

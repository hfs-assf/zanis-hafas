import axios from "axios";
import { baseUrl } from "../../api";

let tambahObat = ({ nama_obat, batas_minimum, satuan }) => {
  return axios.post(baseUrl + "/api/v1/obat", {
    nama_obat,
    batas_minimum,
    satuan
  });
};

export default tambahObat;

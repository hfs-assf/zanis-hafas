import axios from "axios";

const apiURL = "http://localhost:8005";

let editObat = ({ uid, nama_obat, batas_minimum, satuan }) => {
  return axios.put(apiURL + "/api/v1/obat/" + uid, {
    nama_obat,
    batas_minimum,
    satuan
  });
};

export default editObat;

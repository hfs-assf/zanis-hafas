import axios from "axios";

const apiURL = "http://localhost:8005";

let tambahObat = ({ nama_obat, batas_minimum, satuan }) => {
  return axios.post(apiURL + "/api/v1/obat", {
    nama_obat,
    batas_minimum,
    satuan
  });
};

export default tambahObat;

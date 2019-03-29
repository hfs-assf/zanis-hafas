import axios from "axios";

const apiURL = "http://10.6.35.1:8003";

let tambahTindakan = ({ nama_tindakan, biaya_tindakan, jenis }) => {
  return axios.post(apiURL + "/api/v1/tindakan", {
    nama_tindakan,
    biaya_tindakan,
    jenis
  });
};

export default tambahTindakan;

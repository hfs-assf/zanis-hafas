import axios from "axios";

const apiURL = "http://192.168.100.250:8003";

let tambahTindakan = ({ nama_tindakan, biaya_tindakan, jenis }) => {
  return axios.post(apiURL + "/api/v1/tindakan", {
    nama_tindakan,
    biaya_tindakan,
    jenis
  });
};

export default tambahTindakan;

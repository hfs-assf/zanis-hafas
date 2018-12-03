import axios from "axios";

const apiURL = "http://localhost:8003";

let tambahTindakan = ({ nama_tindakan, biaya_tindakan }) => {
  return axios.post(apiURL + "/api/v1/tindakan", {
    nama_tindakan,
    biaya_tindakan
  });
};

export default tambahTindakan;

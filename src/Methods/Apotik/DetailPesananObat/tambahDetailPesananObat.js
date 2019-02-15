import axios from "axios";
const apiURL = "http://localhost:8005";

let tambahDetailPesananObat = ({ uid, doResep }) => {
  return axios.post(apiURL + "/api/v1/detail-pesanan-obat/" + uid, doResep, {
    headers: {
      "Content-Type": "application/json"
    }
  });
};

export default tambahDetailPesananObat;

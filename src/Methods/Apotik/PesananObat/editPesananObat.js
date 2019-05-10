import axios from "axios";
const apiURL = "http://10.6.35.1:8005";

const editPesananObat = (id, status_pesanan) => {
  return axios.put(apiURL + "/api/v1/pesanan-obat/" + id, {
    status_pesanan
  });
};

export default editPesananObat;

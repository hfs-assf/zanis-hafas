import axios from "axios";

const apiURL = "http://192.168.100.250:8003";

let tambahHistoriTindakan = ({
  uid_histori_medis,
  uid_tindakan,
  jumlah,
  keterangan
}) => {
  return axios.post(apiURL + "/api/v1/histori_tindakan", {
    uid_histori_medis,
    uid_tindakan,
    jumlah,
    keterangan
  });
};

export default tambahHistoriTindakan;

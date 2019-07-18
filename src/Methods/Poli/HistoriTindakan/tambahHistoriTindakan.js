import axios from "axios";
import { api } from "../../api";

let tambahHistoriTindakan = ({
  uid_histori_medis,
  uid_tindakan,
  jumlah,
  keterangan
}) => {
  console.log({
    uid_histori_medis,
    uid_tindakan,
    jumlah,
    keterangan
  });
  return axios.post(api.poli + "/histori_tindakan", {
    uid_histori_medis,
    uid_tindakan,
    jumlah,
    keterangan
  });
};

export default tambahHistoriTindakan;

import axios from "axios";
import { api } from "../../api";

let tambahDetailPesananObat = ({ uid_obat, doResep }) => {
  return axios.post(api.apotik + "/detail-pesanan-obat/" + uid_obat, doResep, {
    headers: {
      "Content-Type": "application/json"
    }
  });
};

export default tambahDetailPesananObat;

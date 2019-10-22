import axios from "axios";
import { api } from "../../api";

let editDetailTransaki = (uid, diskon) => {
  return axios.put(`${api.kasir}/detail-transaksi/${uid}`, {
    diskon
  });
};

export default editDetailTransaki;

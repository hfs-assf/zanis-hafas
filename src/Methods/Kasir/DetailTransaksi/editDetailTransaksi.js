import axios from "axios";
import { api } from "../../api";

let editDetailTransaki = (uid, diskon) => {
  console.log("ini yang method", uid, diskon);
  return axios.put(api.kasir + "/detail-transaksi/" + uid, {
    diskon
  });
};

export default editDetailTransaki;

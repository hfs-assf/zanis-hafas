import axios from "axios";
import { api } from "../../api";

const editPesananObat = (id, status_pesanan) => {
  // console.log({
  //   id,
  //   status_pesanan
  // });
  return axios.put(api.apotik + "/pesanan-obat/" + id, {
    status_pesanan
  });
};

export default editPesananObat;

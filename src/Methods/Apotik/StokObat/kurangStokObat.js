import axios from "axios";
import { api } from "../../api";

let kurangStokObat = uid_pesanan => {
  console.log({ uid_pesanan });
  return axios.patch(api.apotik + "/stok-obat/" + uid_pesanan);
};

export default kurangStokObat;

import axios from "axios";
import { api } from "../../api";

let kurangStokObat = (uid_pesanan, id_lokasi) => {
  return axios.put(
    api.apotik + "/kurang-stok-obat/" + uid_pesanan + "?id_lokasi=" + id_lokasi
  );
};

export default kurangStokObat;

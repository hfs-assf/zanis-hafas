import axios from "axios";
import { api } from "../../api";

let kurangStokObat = (uid_pesanan, id_lokasi) => {
  console.log({ uid_pesanan, id_lokasi });
  return axios.patch(
    api.apotik + "/stok-obat/" + uid_pesanan + "?id_lokasi=" + id_lokasi
  );
};

export default kurangStokObat;

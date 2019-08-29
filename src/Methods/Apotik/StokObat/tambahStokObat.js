import axios from "axios";
import { api } from "../../api";

let tambahStokObat = ({
  uid,
  stok,
  kadaluarsa,
  nik_penerima,
  harga_modal,
  harga_jual,
  id_lokasi
}) => {
  console.log({
    uid,
    stok,
    kadaluarsa,
    nik_penerima,
    harga_modal,
    harga_jual,
    id_lokasi
  });
  return axios.post(api.apotik + "/stok-obat/" + uid, {
    stok,
    kadaluarsa,
    nik_penerima,
    harga_modal,
    harga_jual,
    id_lokasi
  });
};

export default tambahStokObat;

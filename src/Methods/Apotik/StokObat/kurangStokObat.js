import axios from "axios";

const apiURL = "http://localhost:8005";

let kurangStokObat = ({ uid, jumlah_keluar, nik_karyawan }) => {
  return axios.put(apiURL + "/api/v1/stok-obat/" + uid, {
    jumlah_keluar,
    nik_karyawan
  });
};

export default kurangStokObat;

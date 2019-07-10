import axios from "axios";

const apiURL = "http://10.6.35.1:8005";

let kurangStokObat = ({ uid_obat, jumlah_keluar, nik_karyawan }) => {
  console.log({
    uid_obat,
    jumlah_keluar,
    nik_karyawan
  });
  return axios.patch(apiURL + "/api/v1/stok-obat/" + uid_obat, {
    jumlah_keluar,
    nik_karyawan
  });
  // console.log(uid + "---" + jumlah_obat + " -- " + nik_dokter);
};

export default kurangStokObat;

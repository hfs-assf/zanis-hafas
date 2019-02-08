import axios from "axios";

const apiURL = "http://localhost:8005";

let kurangStokObat = ({ uid, jumlah_obat, nik_dokter }) => {
  return axios.patch(apiURL + "/api/v1/stok-obat/" + uid, {
    jumlah_obat,
    nik_dokter
  });
  // console.log(uid + "---" + jumlah_obat + " -- " + nik_dokter);
};

export default kurangStokObat;

import axios from "axios";

const apiURL = "http://10.6.35.1:8005";

let kurangStokObat = ({ uid, jumlah_obat, nik_dokter }) => {
  return axios.patch(apiURL + "/api/v1/stok-obat/" + uid, {
    jumlah_obat,
    nik_dokter
  });
  // console.log(uid + "---" + jumlah_obat + " -- " + nik_dokter);
};

export default kurangStokObat;

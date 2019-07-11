import axios from "axios";

const apiURL = "http://10.6.35.1:8005";

let kurangStokObat = uid_pesanan => {
  return axios.patch(apiURL + "/api/v1/stok-obat/" + uid_pesanan);
};

export default kurangStokObat;

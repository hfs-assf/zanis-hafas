import axios from "axios";

const apiURL = "http://10.6.35.1:8005";

let listStokObat = uid => {
  return axios.get(apiURL + "/api/v1/stok-obat/" + uid);
};

export default listStokObat;

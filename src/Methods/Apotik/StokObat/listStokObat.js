import axios from "axios";

const apiURL = "http://localhost:8005";

let listStokObat = uid => {
  return axios.get(apiURL + "/api/v1/stok-obat/" + uid + "?limit=3");
};

export default listStokObat;

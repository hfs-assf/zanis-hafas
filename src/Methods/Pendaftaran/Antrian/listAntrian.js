import axios from "axios";

const apiURL = "http://192.168.100.250:8001";

let listAntrian = uid => {
  var cari = uid !== null ? "?uid=" + uid : null;
  return axios.get(apiURL + "/api/v1/antrian" + cari);
};

export default listAntrian;

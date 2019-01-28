import axios from "axios";

const apiURL = "http://localhost:8001";

let listAntrian = uid => {
  var cari = uid !== null ? "?uid=" + uid : null;
  return axios.get(apiURL + "/api/v1/antrian" + cari);
};

export default listAntrian;

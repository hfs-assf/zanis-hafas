import axios from "axios";
const apiURL = "http://localhost:8005";

let hapusObat = uid => {
  return axios.delete(apiURL + "/api/v1/obat/" + uid, {
    headers: { Authorization: "token" }
  });
};

export default hapusObat;

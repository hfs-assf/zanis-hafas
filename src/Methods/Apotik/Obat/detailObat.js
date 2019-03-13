import axios from "axios";
const apiURL = "http://192.168.100.250:8005";

let detailObat = uid => {
  return axios.get(apiURL + "/api/v1/obat/" + uid);
};

export default detailObat;

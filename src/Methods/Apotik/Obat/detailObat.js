import axios from "axios";
const apiURL = "http://10.6.35.1:8005";

let detailObat = uid => {
  return axios.get(apiURL + "/api/v1/obat/" + uid);
};

export default detailObat;

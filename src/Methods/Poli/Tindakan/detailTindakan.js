import axios from "axios";

const apiURL = "http://192.168.100.250:8003";

let detailTindakan = uid => {
  return axios.get(apiURL + "/api/v1/tindakan/" + uid);
};

export default detailTindakan;

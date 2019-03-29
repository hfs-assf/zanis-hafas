import axios from "axios";

const apiURL = "http://10.6.35.1:8003";

let detailTindakan = uid => {
  return axios.get(apiURL + "/api/v1/tindakan/" + uid);
};

export default detailTindakan;

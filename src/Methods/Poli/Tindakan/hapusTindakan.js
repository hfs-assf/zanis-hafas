import axios from "axios";

const apiURL = "http://192.168.100.250:8003";

let hapusTindakan = uid => {
  return axios.delete(apiURL + "/api/v1/tindakan/" + uid, {
    headers: { Authorization: "token" }
  });
};

export default hapusTindakan;

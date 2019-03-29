import axios from "axios";

const apiURL = "http://10.6.35.1:8003";

let hapusTindakan = uid => {
  return axios.delete(apiURL + "/api/v1/tindakan/" + uid, {
    headers: { Authorization: "token" }
  });
};

export default hapusTindakan;

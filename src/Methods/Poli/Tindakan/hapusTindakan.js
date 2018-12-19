import axios from "axios";

const apiURL = "http://localhost:8003";

let hapusTindakan = uid => {
  return axios.delete(apiURL + "/api/v1/tindakan/" + uid, {
    headers: { Authorization: "token" }
  });
};

export default hapusTindakan;

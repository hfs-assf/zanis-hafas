import axios from "axios";

const apiURL = "http://10.6.35.1:8003";

let listTindakan = () => {
  return axios.get(apiURL + "/api/v1/tindakan");
};

export default listTindakan;

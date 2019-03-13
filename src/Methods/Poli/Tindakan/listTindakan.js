import axios from "axios";

const apiURL = "http://192.168.100.250:8003";

let listTindakan = () => {
  return axios.get(apiURL + "/api/v1/tindakan");
};

export default listTindakan;

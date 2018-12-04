import axios from "axios";

const apiURL = "http://localhost:8003";

let listTindakan = () => {
  return axios.get(apiURL + "/api/v1/tindakan");
};

export default listTindakan;

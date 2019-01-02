import axios from "axios";

const apiURL = "http://localhost:8001";

let listAntrian = () => {
  return axios.get(apiURL + "/api/v1/antrian");
};

export default listAntrian;

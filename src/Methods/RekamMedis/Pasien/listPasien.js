import axios from "axios";

const apiURL = "http://localhost:8002";

let listPasien = () => {
  return axios.get(apiURL + "/api/v1/pasien");
};

export default listPasien;

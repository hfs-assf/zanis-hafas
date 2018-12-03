import axios from "axios";

const apiURL = "http://localhost:8005";

let listObat = () => {
  return axios.get(apiURL + "/api/v1/obat");
};

export default listObat;

import axios from "axios";

const apiURL =
  "`https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=chelsea";

let listPoli = e => {
  return axios.get(apiURL + e);
};

export default listPoli;

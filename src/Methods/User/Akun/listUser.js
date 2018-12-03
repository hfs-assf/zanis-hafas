import axios from "axios";

const apiURL = "http://localhost:8000";

let listUser = () => {
  return axios.get(apiURL + "/api/v1/akun-user");
};

export default listUser;

import axios from "axios";
const apiURL = "http://10.6.35.1:8000";

let listUser = () => {
  return axios.get(apiURL + "/api/v1/akun-user");
};

export default listUser;

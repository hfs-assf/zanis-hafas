import axios from "axios";
const apiURL = "http://192.168.100.250:8000";

let listUser = () => {
  return axios.get(apiURL + "/api/v1/akun-user");
};

export default listUser;

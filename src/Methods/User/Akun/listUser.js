import axios from "axios";
import { baseUrl } from "../../api";

let listUser = () => {
  return axios.get(baseUrl + "/api/v1/akun-user");
};

export default listUser;

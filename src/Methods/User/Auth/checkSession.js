import axios from "axios";
import getToken from "./getToken";
import { api } from "../../api";

let checkSession = () => {
  let token = getToken();
  if (token)
    return axios
      .get(`${api.akunUser}/cek-token`, {
        headers: { Authorization: token }
      })
      .catch(err => console.log(err));
  return Promise.reject(false);
};

export default checkSession;

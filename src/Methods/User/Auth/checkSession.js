import axios from "axios";
import getToken from "./getToken";

let api = "http://10.6.35.1:8006/api/v1/cek-token";

let checkSession = () => {
  let token = getToken();
  if (token)
    return axios
      .get(api, {
        headers: { Authorization: token }
      })
      .catch(err => console.log(err));
  return Promise.reject(false);
};

export default checkSession;

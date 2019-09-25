import axios from "axios";
import getToken from "./getToken";

let api = "http://165.22.98.116:8006/api/v1/cek-token";

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

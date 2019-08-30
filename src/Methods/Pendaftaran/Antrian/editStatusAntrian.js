import axios from "axios";
import { api } from "../../api";

let editStatusAntrian = uid => {
  return axios.put(api.pendaftaran + "/antrian/" + uid);
};

export default editStatusAntrian;

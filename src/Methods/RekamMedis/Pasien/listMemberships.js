import axios from "axios";
import { api } from "../../api";

let listMembership = () => {
  return axios.get(api.membership + "/member?nomor_kartu=");
};

export default listMembership;

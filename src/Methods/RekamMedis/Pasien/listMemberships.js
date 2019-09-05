import axios from "axios";
import { api } from "../../api";

let listMembership = nomor_kartu => {
  return axios.get(api.membership + "/member/" + nomor_kartu + "?limit=1");
};

export default listMembership;

import axios from "axios";
import { api } from "../../api";

let listMembership = nomor_rekam_medis => {
  return axios.get(api.membership + "/member/" + nomor_rekam_medis);
};

export default listMembership;

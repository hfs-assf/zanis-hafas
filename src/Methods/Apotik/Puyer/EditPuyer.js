import axios from "axios";
import { api } from "../../api";

let editPuyer = ({ uid, listDetail }) => {
  console.log("miaww", {
    uid,
    listDetail
  });
  return axios.put(`${api.apotik}/harga-racik/${uid}`, {
    listDetail
  });
};

export default editPuyer;

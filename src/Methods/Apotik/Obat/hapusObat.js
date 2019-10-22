import axios from "axios";
import { api } from "../../api";

let hapusObat = uid => {
  return axios.delete(`${api.apotik}/obat/${uid}`, {
    headers: { Authorization: "token" }
  });
};

export default hapusObat;

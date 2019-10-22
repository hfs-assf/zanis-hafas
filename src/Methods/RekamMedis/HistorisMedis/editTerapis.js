import axios from "axios";
import { api } from "../../api";

let editTerapis = (uid, namaTerapis) => {
  console.log({ uid, namaTerapis });
  return axios.put(`${api.rekamMedis}/histori-medis/${uid}`, {
    namaTerapis
  });
};

export default editTerapis;

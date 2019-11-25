import axios from "axios";
import { api } from "../../api";

const listPuyer = (uid, id_lokasi) =>
  axios.get(`${api.apotik}/racik/${uid}?id_lokasi=${id_lokasi}`);

export default listPuyer;

import axios from "axios";
import { api } from "../../api";

let minStokDetail = (id_lokasi) => {
  return axios.get(`${api.apotik}/list-stok-menipis/?id_lokasi=${id_lokasi}`);
};
export default minStokDetail;


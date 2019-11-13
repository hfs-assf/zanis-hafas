import axios from "axios";
import { api } from "../../api";

let listDokter = (id_lokasi) =>{
  return axios.get(`${api.poli}/dokter?id_lokasi=${id_lokasi}`)
}

export default listDokter
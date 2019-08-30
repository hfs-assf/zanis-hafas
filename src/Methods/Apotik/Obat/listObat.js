import axios from "axios";
import { api } from "../../api";
let obatList = nama_obat =>
  axios.get(api.apotik + "/obat?limit=5&nama_obat=" + nama_obat);

export default obatList;

export const obat = () => axios.get(api.apotik + "/obat");

import axios from "axios";
import { api } from "../../api";

let obatList = nama_obat =>
  axios.get(api.apotik + "/obat?limit=20&nama_obat=" + nama_obat);

export default obatList;

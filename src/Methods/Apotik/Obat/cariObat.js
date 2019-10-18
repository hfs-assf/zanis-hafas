import axios from "axios";
import { api } from "../../api";

let cariObat = nama_obat =>
  axios.get(api.apotik + "/cari-obat?limit=15&cari=" + nama_obat);

export default cariObat;

export const jmlObat = () => axios.get(api.apotik + "/cari-obat");

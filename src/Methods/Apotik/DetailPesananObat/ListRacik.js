import axios from "axios";
import { api } from "../../api";
let ListRacik = uid => axios.get(`${api.apotik}/racik/${uid}`);

export default ListRacik;

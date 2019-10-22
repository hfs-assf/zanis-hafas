import axios from "axios";
import { api } from "../../api";

const listPuyer = uid => axios.get(`${api.apotik}/racik/${uid}`);

export default listPuyer;

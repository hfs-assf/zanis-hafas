import axios from "axios";
import { api } from "../../api";

export let listAntrian = () => {
  return axios.get(`${api.pendaftaran}/antrian?status_antrian=menunggu`);
};

export const jmlAntrian = () => {
  return axios.get(`${api.pendaftaran}/antrian`);
};

import axios from "axios";
import { api } from "../../api";

export let listAntrian = id_lokasi => {
  return axios
    .get(
      `${api.pendaftaran}/antrian?status_antrian=menunggu&id_lokasi=${id_lokasi}`
    )
    .catch(err => console.log(err));
};

export const jmlAntrian = id_lokasi => {
  return axios
    .get(`${api.pendaftaran}/antrian?id_lokasi=${id_lokasi}`)
    .catch(err => console.log(err));
};

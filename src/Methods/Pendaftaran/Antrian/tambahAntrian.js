import axios from "axios";
import { api } from "../../api";

let tambahAntrian = ({ nomor_rekam_medis, poli, jaminan, dokter }) => {
  console.log({nomor_rekam_medis, poli, jaminan, dokter})
  return axios.post(api.pendaftaran + "/antrian", {
    nomor_rekam_medis,
    poli,
    jaminan,
    dokter
  });
};

export default tambahAntrian;

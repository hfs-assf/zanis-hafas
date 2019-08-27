import axios from "axios";
import { api } from "../../api";
let listRM = nomor_rekam_medis =>
  axios.get(
    api.membership +
      "/rekam-medis-member?limit=5&nomor_rekam_medis=" +
      nomor_rekam_medis
  );

export default listRM;

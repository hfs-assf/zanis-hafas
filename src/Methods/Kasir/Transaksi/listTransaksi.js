import axios from "axios";
import { api } from "../../api";

const listTransaksi = status => axios.get(`${api.kasir}/transaksi/${status}`);

export default listTransaksi;

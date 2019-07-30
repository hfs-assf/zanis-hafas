import axios from "axios";
import { api } from "../../api";

let tambahTransaksi = ({
  nik_penerbit,
  nomor_rekam_medis,
  penjamin,
  jenis_pembayaran
}) => {
  // console.log({
  //   nik_penerbit,
  //   nomor_rekam_medis,
  //   penjamin,
  //   jenis_pembayaran
  // });
  return axios.post(api.kasir + "/transaksi", {
    data: {
      nik_penerbit,
      nomor_rekam_medis,
      penjamin,
      jenis_pembayaran
    }
  });
};

export default tambahTransaksi;

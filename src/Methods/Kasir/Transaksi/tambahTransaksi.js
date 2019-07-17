import axios from "axios";
const apiURL = "http://10.6.35.1:8004";

let tambahTransaksi = ({
  nik_penerbit,
  nomor_rekam_medis,
  penjamin,
  jenis_pembayaran
}) => {
  return axios.post(apiURL + "/api/v1/transaksi", {
    data: {
      nik_penerbit,
      nomor_rekam_medis,
      penjamin,
      jenis_pembayaran
    }
  });
};

export default tambahTransaksi;

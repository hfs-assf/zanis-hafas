import axios from "axios";

const apiURL = "https://zanis-786d9.firebaseio.com/";

let tambahAntrian = ({
  no_rm,
  layanan_medis,
  nama_dokter,
  poliklinik,
  tanggal_masuk,
  asuransi_kelas,
  asuransi_faskes,
  asuransi_no_kartu,
  asuransi_tanggal_valid
}) => {
  return axios.post(apiURL, {
    no_rm: "x",
    layanan_medis: "x",
    nama_dokter: "x",
    poliklinik: "x",
    tanggal_masuk: "x",
    asuransi_kelas: "x",
    asuransi_faskes: "x",
    asuransi_no_kartu: "x",
    asuransi_tanggal_valid: "x"
  });
};

export default tambahAntrian;

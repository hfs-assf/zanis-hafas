import axios from "axios";
const apiURL = "http://192.168.100.250:8002";

let tambahPasien = ({
  nomor_pengenal,
  jenis_nomor_pengenal,
  email,
  nama_pasien,
  tempat_lahir,
  tanggal_lahir,
  jenis_kelamin,
  status,
  agama,
  alamat,
  kecamatan,
  kelurahan,
  kode_pos,
  telepon,
  handphone,
  pendidikan,
  pekerjaan,
  kantor,
  catatan
}) => {
  return axios.post(apiURL + "/api/v1/pasien", {
    nomor_pengenal,
    jenis_nomor_pengenal,
    nama_pasien: nama_pasien.toLowerCase(),
    tempat_lahir: tempat_lahir.toLowerCase(),
    tanggal_lahir,
    jenis_kelamin,
    status,
    agama,
    alamat: alamat.toLowerCase(),
    kecamatan,
    kelurahan,
    kode_pos,
    telepon,
    handphone,
    pendidikan: pendidikan.toLowerCase(),
    pekerjaan: pekerjaan.toLowerCase(),
    kantor,
    catatan
  });
};

export default tambahPasien;

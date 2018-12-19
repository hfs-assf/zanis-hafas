import axios from "axios";
import { baseUrl } from "../../api";

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
  return axios.post(baseUrl + "/api/v1/pasien", {
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
  });
};

export default tambahPasien;

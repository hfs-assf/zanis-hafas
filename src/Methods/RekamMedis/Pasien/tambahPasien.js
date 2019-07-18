import axios from "axios";
import { api } from "../../api";

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
  return axios.post(api.rekamMedis + "/pasien", {
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

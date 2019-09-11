import axios from "axios";
import { api } from "../../api";

let tambahPasien = ({
  nomor_pengenal,
  nomor_kartu,
  jenis_nomor_pengenal,
  nama_member,
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
  id_lokasi,
  catatan
}) => {
  console.log({
    nomor_pengenal,
    nomor_kartu,
    jenis_nomor_pengenal,
    nama_member,
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
    id_lokasi,
    catatan
  });
  return axios.post(api.rekamMedis + "/pasien", {
    nomor_pengenal,
    nomor_kartu,
    jenis_nomor_pengenal,
    nama_member,
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
    pendidikan: pendidikan.toLowerCase(),
    pekerjaan: pekerjaan.toLowerCase(),
    kantor,
    id_lokasi,
    catatan
  });
};

export default tambahPasien;

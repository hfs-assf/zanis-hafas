import React, { Component } from "react";
import tambahPasien from "../../../Methods/RekamMedis/Pasien/tambahPasien";
import ModalKonfirmasi from "../Animasi/ModalKonfirmasi";
import kecamatan from "../../../Methods/data.json";
// import listProvinsi from "../../../JSON/provinsi";
// import listProvinsi from "../../../Methods/Pendaftaran/listProvinsi";

class FormPendaftaran extends Component {
  constructor() {
    super();
    this.state = {
      notification: "0",
      nomor_pengenal: "",
      jenis_nomor_pengenal: "ktp",
      nama_pasien: "",
      tempat_lahir: "",
      tanggal_lahir: "",
      jenis_kelamin: "P",
      status: "Belum Menikah",
      agama: "Islam",
      alamat: "",
      kecamatan: "Sail",
      kelurahan: "",
      kode_pos: "",
      telepon: "",
      handphone: "",
      pendidikan: "",
      pekerjaan: "",
      kantor: "",
      nama_penanggungjawab: "",
      status_penanggungjawab: "",
      telepon_penanggungjawab: "",
      alamat_penanggungjawab: ""
    };
  }

  handleChange = e => {
    e.preventDefault();
    const { value, name } = e.target;
    this.setState({
      [name]: value
    });
  };

  listKelurahan(namakecamatan) {
    let saring = kecamatan.filter(
      el => el.nama_kecamatan === `${namakecamatan}`
    )[0].nama_kelurahan;
    return saring.map((el, index) => (
      <option key={index} value={el}>
        {el}
      </option>
    ));
  }

  // toTitleCase = text => {
  //   return text
  //     .split(" ")
  //     .map(string => string.charAt(0).toUpperCase() + string.substring(1))
  //     .join(" ");
  // };

  onSubmit = () => {
    console.log(this.state);
    const catatan = `Penanggung Jawab: ${this.state.nama_penanggungjawab}, ${
      this.state.status_penanggungjawab
    },${this.state.telepon_penanggungjawab}, ${
      this.state.alamat_penanggungjawab
    }`;

    tambahPasien({
      nomor_pengenal: this.state.nomor_pengenal,
      jenis_nomor_pengenal: "ktp",
      nama_pasien: this.state.nama_pasien,
      tempat_lahir: this.state.tempat_lahir,
      tanggal_lahir: this.state.tanggal_lahir,
      jenis_kelamin: this.state.jenis_kelamin,
      status: this.state.status,
      agama: this.state.agama,
      alamat: this.state.alamat,
      kecamatan: this.state.kecamatan,
      kelurahan: this.state.kelurahan,
      kode_pos: this.state.kode_pos,
      telepon: this.state.telepon,
      handphone: this.state.handphone,
      pendidikan: this.state.pendidikan,
      pekerjaan: this.state.pekerjaan,
      kantor: this.state.kantor,
      catatan: catatan
    })
      .then(this.setState({ notification: "1" }))
      .catch(err => {
        this.setState({ notification: "0" });
      });
  };

  cleanAll = () => {
    this.setState({
      nomor_pengenal: "",
      jenis_nomor_pengenal: "ktp",
      email: "",
      nama_pasien: "",
      tempat_lahir: "",
      tanggal_lahir: "",
      jenis_kelamin: "P",
      status: "Belum Menikah",
      agama: "Islam",
      alamat: "",
      kecamatan: "Sail",
      kelurahan: "Tenayan Raya",
      kode_pos: "",
      telepon: "",
      handphone: "",
      pendidikan: "",
      pekerjaan: "",
      kantor: "",
      nama_penanggungjawab: "",
      status_penanggungjawab: "",
      telepon_penanggungjawab: "",
      alamat_penanggungjawab: ""
    });
  };
  render() {
    console.log("kelurahan", this.state.kelurahan);
    console.log("ini kecamatan", this.state.kecamatan);
    return (
      <div>
        <div className="watermark">
          <img
            className="img-fluid"
            src={require("../../../Components/ASSETS/IMG/teman.jpg")}
            alt="logo zanis"
          />
        </div>
        <div className="form-style">
          <div className="row">
            <div className="col-md-6">
              <fieldset>
                <legend>Data Diri</legend>
                <label>
                  <span>
                    No KTP <span className="required">*</span>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    name="nomor_pengenal"
                    value={this.state.nomor_pengenal}
                    onChange={e => this.handleChange(e)}
                    required
                  />
                </label>

                <label>
                  <span>
                    Nama <span className="required">*</span>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    name="nama_pasien"
                    value={this.state.nama_pasien}
                    onChange={e => this.handleChange(e)}
                    required
                  />
                </label>
                <div className="row">
                  <div className="col-sm-6">
                    <label>
                      <span>
                        Tempat Lahir <span className="required">*</span>
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        name="tempat_lahir"
                        value={this.state.tempat_lahir}
                        onChange={e => this.handleChange(e)}
                        required
                      />
                    </label>
                  </div>
                  <div className="col-sm-6">
                    <label>
                      <span>
                        Tanggal Lahir <span className="required">*</span>
                      </span>
                      <input
                        type="date"
                        className="form-control"
                        name="tanggal_lahir"
                        value={this.state.tanggal_lahir}
                        onChange={e => this.handleChange(e)}
                        required
                      />
                    </label>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-3">
                    <label>
                      <span>
                        Agama
                        <span className="required">*</span>
                      </span>
                      <select
                        name="agama"
                        className="form-control"
                        onChange={e => this.handleChange(e)}
                        required
                      >
                        <option defaultValue="Islam">Islam</option>
                        <option value="Kristen">Kristen</option>
                        <option value="Budha">Budha</option>
                        <option value="Hindu">Hindu</option>
                      </select>
                    </label>
                  </div>
                  <div className="col-sm-4">
                    <label>
                      <span>
                        Jenis Kelamin
                        <span className="required">*</span>
                      </span>
                      <select
                        name="jenis_kelamin"
                        className="form-control"
                        onChange={e => this.handleChange(e)}
                        required
                      >
                        <option defaultValue="P">Perempuan</option>
                        <option value="L">Laki-laki</option>
                      </select>
                    </label>
                  </div>
                  <div className="col-sm-5">
                    <label>
                      <span>
                        Status
                        <span className="required">*</span>
                      </span>
                      <select
                        name="status"
                        className="form-control"
                        onChange={e => this.handleChange(e)}
                        required
                      >
                        <option defaultValue="Belum Menikah">
                          Belum Menikah
                        </option>
                        <option value="Sudah Menikah">Sudah Menikah</option>
                      </select>
                    </label>
                  </div>
                </div>
                <label>
                  <span>
                    Alamat <span className="required">*</span>
                  </span>
                  <textarea
                    name="alamat"
                    value={this.state.alamat}
                    className="form-control"
                    onChange={e => this.handleChange(e)}
                    required
                  />
                </label>
                <div className="row">
                  <div className="col-sm-4">
                    <label>
                      <span>
                        Kecamatan
                        <span className="required">*</span>
                      </span>
                      <select
                        name="kecamatan"
                        className="form-control"
                        onChange={e => this.handleChange(e)}
                        value={this.state.kecamatan}
                        required
                      >
                        {kecamatan.map((el, index) => {
                          return (
                            <option value={el.nama_kecamatan} key={index}>
                              {el.nama_kecamatan}
                            </option>
                          );
                        })}
                      </select>
                    </label>
                  </div>
                  <div className="col-sm-4">
                    <label>
                      <span>
                        Kelurahan
                        <span className="required">*</span>
                      </span>
                      <select
                        name="kelurahan"
                        className="form-control"
                        onChange={e => this.handleChange(e)}
                        value={this.state.kelurahan}
                        required
                      >
                        <option>Pilih Kelurahan</option>
                        {this.listKelurahan(this.state.kecamatan)}
                      </select>
                    </label>
                  </div>

                  <div className="col-sm-4">
                    <label>
                      <span>Kode Pos</span>
                      <input
                        type="number"
                        name="kode_pos"
                        value={this.state.kode_pos}
                        className="form-control"
                        onChange={e => this.handleChange(e)}
                      />
                    </label>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <label>
                      <span>Telepon</span>
                      <input
                        type="number"
                        name="telepon"
                        value={this.state.telepon}
                        className="form-control"
                        onChange={e => this.handleChange(e)}
                      />
                    </label>
                  </div>
                  <div className="col-sm-6">
                    <label>
                      <span>
                        Handphone <span className="required">*</span>
                      </span>
                      <input
                        type="number"
                        name="handphone"
                        value={this.state.handphone}
                        className="form-control"
                        onChange={e => this.handleChange(e)}
                        required
                      />
                    </label>
                  </div>
                </div>
              </fieldset>
              <br />
            </div>
            <div className="col-md-6">
              <fieldset>
                <legend>Pendidikan</legend>
                <div className="row">
                  <div className="col-sm">
                    <label>
                      <span>Pendidikan</span>
                      <input
                        type="text"
                        className="form-control"
                        name="pendidikan"
                        value={this.state.pendidikan}
                        onChange={e => this.handleChange(e)}
                      />
                    </label>
                  </div>
                  <div className="col-sm">
                    <label>
                      <span>Pekerjaan</span>
                      <input
                        type="text"
                        className="form-control"
                        name="pekerjaan"
                        value={this.state.pekerjaan}
                        onChange={e => this.handleChange(e)}
                      />
                    </label>
                  </div>
                </div>
                <label>
                  <span>
                    <span>Alamat Kantor </span>
                  </span>
                  <textarea
                    name="kantor"
                    className="form-control"
                    value={this.state.kantor}
                    onChange={e => this.handleChange(e)}
                  />
                </label>
              </fieldset>
              <br />
              <fieldset>
                <legend>Penanggung Jawab</legend>
                <div className="row">
                  <div className="col-sm">
                    <label>
                      <span>Nama</span>
                      <input
                        type="text"
                        className="form-control"
                        name="nama_penanggungjawab"
                        value={this.state.nama_penanggungjawab}
                        onChange={e => this.handleChange(e)}
                      />
                    </label>
                  </div>
                  <div className="col-sm">
                    <label>
                      <span>Status</span>
                      <input
                        type="text"
                        className="form-control"
                        name="status_penanggungjawab"
                        value={this.state.status_penanggungjawab}
                        onChange={e => this.handleChange(e)}
                      />
                    </label>
                  </div>
                  <div className="col-sm">
                    <label>
                      <span>Telepon</span>
                      <input
                        type="number"
                        className="form-control"
                        name="telepon_penanggungjawab"
                        value={this.state.telepon_penanggungjawab}
                        onChange={e => this.handleChange(e)}
                      />
                    </label>
                  </div>
                </div>
                <label>
                  <span>
                    <span>Alamat </span>
                  </span>
                  <textarea
                    name="alamat_penanggungjawab"
                    className="form-control"
                    value={this.state.alamat_penanggungjawab}
                    onChange={e => this.handleChange(e)}
                  />
                </label>
                <br />
              </fieldset>
            </div>
          </div>
          <div className="row">
            <div className="col-md-10">
              <div className="modal-footer justify-content-center">
                <button
                  className="btn btn-primary"
                  data-toggle="modal"
                  data-target="#konfirmasiPendaftaran"
                  onClick={() => this.onSubmit()}
                >
                  Simpan
                </button>
                <button
                  className="btn btn-warning"
                  onClick={() => this.cleanAll()}
                >
                  Bersihkan
                </button>
              </div>
            </div>
          </div>
          <ModalKonfirmasi
            notification={this.state.notification}
            modal="konfirmasiPendaftaran"
          />
        </div>
      </div>
    );
  }
}

export default FormPendaftaran;

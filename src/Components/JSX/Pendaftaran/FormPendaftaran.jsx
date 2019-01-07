import React, { Component } from "react";
import tambahPasien from "../../../Methods/RekamMedis/Pasien/tambahPasien";
import ModalKonfirmasi from "../Animasi/ModalKonfirmasi";

class FormPendaftaran extends Component {
  state = {
    notification: "0",
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
    alamat_penanggungjawab: "",
    catatan: ""
  };
  // componentDidUpdate(){
  //   this.state.notification === "1" ? document.getElementById("notification").
  // }
  handleInputChange(event) {
    const target = event.target;
    // const value = target.type === "checkbox" ? target.checked : target.value;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  tambahPasienBaru() {
    var catatan = "Penanggung jawab ".concat(
      this.state.nama_penanggungjawab,
      " (",
      this.state.status_penanggungjawab,
      ", ",
      this.state.telepon_penanggungjawab,
      ", ",
      this.state.alamat_penanggungjawab,
      ")"
    );

    tambahPasien({
      nomor_pengenal: this.state.nomor_pengenal,
      jenis_nomor_pengenal: "ktp",
      email: this.state.email,
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
      .then(() => {
        this.setState({ notification: "1" });
      })
      .catch(() => this.setState({ notification: "0" }));
  }
  cleanAll() {
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
      catatan: ""
    });
  }
  render() {
    return (
      <div>
        <div className="watermark">
          <img
            className="img-fluid"
            src="https://assets.about.me/background/users/r/s/i/rsia_zainab_1440732420_26.jpg"
            alt="logo zainis"
          />
        </div>
        <div className="form-style">
          <form>
            <div className="row">
              <div className="col-md-5">
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
                      onChange={e => this.handleInputChange(e)}
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
                      onChange={e => this.handleInputChange(e)}
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
                          onChange={e => this.handleInputChange(e)}
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
                          onChange={e => this.handleInputChange(e)}
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
                          onChange={e => this.handleInputChange(e)}
                          required
                        >
                          <option value="Islam">Islam</option>
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
                          onChange={e => this.handleInputChange(e)}
                          required
                        >
                          <option value="P">Perempuan</option>
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
                          onChange={e => this.handleInputChange(e)}
                          required
                        >
                          <option value="Belum Menikah">Belum Menikah</option>
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
                      className="form-control"
                      onChange={e => this.handleInputChange(e)}
                      required
                    />
                  </label>
                  <div className="row">
                    <div className="col-sm-4">
                      <label>
                        <span>
                          Kelurahan
                          <span className="required">*</span>
                        </span>
                        <select
                          name="kelurahan"
                          className="form-control"
                          onChange={e => this.handleInputChange(e)}
                          required
                        >
                          <option value="Tenayan Raya">Tenayan Raya</option>
                          <option value="...">...</option>
                        </select>
                      </label>
                    </div>
                    <div className="col-sm-4">
                      <label>
                        <span>
                          Kecamatan
                          <span className="required">*</span>
                        </span>
                        <select
                          name="kecamatan"
                          className="form-control"
                          onChange={e => this.handleInputChange(e)}
                          required
                        >
                          <option value="Sail">Sail</option>
                          <option value="Rumbai">Rumbai</option>
                        </select>
                      </label>
                    </div>
                    <div className="col-sm-4">
                      <label>
                        <span>Kode Pos</span>
                        <input
                          type="number"
                          className="form-control"
                          name="kode_pos"
                          onChange={e => this.handleInputChange(e)}
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
                          className="form-control"
                          name="telepon"
                          onChange={e => this.handleInputChange(e)}
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
                          className="form-control"
                          name="handphone"
                          onChange={e => this.handleInputChange(e)}
                          required
                        />
                      </label>
                    </div>
                  </div>
                  <label>
                    <span>Email</span>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      onChange={e => this.handleInputChange(e)}
                    />
                  </label>
                </fieldset>
                <br />
              </div>
              <div className="col-md-5">
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
                          onChange={e => this.handleInputChange(e)}
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
                          onChange={e => this.handleInputChange(e)}
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
                      onChange={e => this.handleInputChange(e)}
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
                          onChange={e => this.handleInputChange(e)}
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
                          onChange={e => this.handleInputChange(e)}
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
                          onChange={e => this.handleInputChange(e)}
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
                      onChange={e => this.handleInputChange(e)}
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
                    data-target="#notification"
                    onClick={() => this.tambahPasienBaru()}
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
              show="true"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default FormPendaftaran;

import React, { Component } from "react";
import tambahPasien from "../../../Methods/RekamMedis/Pasien/tambahPasien";
import Preloader from "../../../Views/JSX/Preloader/Preloader";

class FormPendaftaran extends Component {
  state = {
    nomor_pengenal: "4124121241",
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
  };

  tambahPasienBaru = event => {
    event.preventDefault();
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
      catatan: this.state.catatan
    });
  };
  cleanAll() {
    this.setState({
      nomor_pengenal: "4124121241",
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
        <div className="loading1">
          <Preloader />
        </div>

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
                      name="no_ktp"
                      onChange={event =>
                        this.setState({
                          nomor_pengenal: event.target.value
                        })
                      }
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
                      onChange={event =>
                        this.setState({
                          nama_pasien: event.target.value
                        })
                      }
                      required
                    />
                  </label>
                  <div className="row">
                    <div className="col-sm-6">
                      {" "}
                      <label>
                        <span>
                          Tempat Lahir <span className="required">*</span>
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          name="tempat_lahir"
                          onChange={event =>
                            this.setState({
                              tempat_lahir: event.target.value
                            })
                          }
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
                          onChange={event =>
                            this.setState({
                              tanggal_lahir: event.target.value
                            })
                          }
                          required
                        />
                      </label>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-sm-3">
                      {" "}
                      <label>
                        <span>Agama</span>
                        <select
                          name="agama"
                          className="form-control"
                          onChange={event =>
                            this.setState({
                              agama: event.target.value
                            })
                          }
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
                      {" "}
                      <label>
                        <span>Jenis Kelamin</span>
                        <select
                          name="jenis_kelamin"
                          className="form-control"
                          onChange={event =>
                            this.setState({
                              jenis_kelamin: event.target.value
                            })
                          }
                          required
                        >
                          <option value="P">Perempuan</option>
                          <option value="L">Laki-laki</option>
                        </select>
                      </label>
                    </div>
                    <div className="col-sm-5">
                      <label>
                        <span>Status</span>
                        <select
                          name="status"
                          className="form-control"
                          onChange={event =>
                            this.setState({
                              status: event.target.value
                            })
                          }
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
                      onChange={event =>
                        this.setState({
                          alamat: event.target.value
                        })
                      }
                      required
                    />
                  </label>
                  <div className="row">
                    <div className="col-sm-4">
                      <label>
                        <span>Kelurahan</span>
                        <select
                          name="kelurahan"
                          className="form-control"
                          onChange={event =>
                            this.setState({
                              kelurahan: event.target.value
                            })
                          }
                          required
                        >
                          <option value="Tenayan Raya">Tenayan Raya</option>
                          <option value="...">...</option>
                        </select>
                      </label>
                    </div>
                    <div className="col-sm-4">
                      <label>
                        <span>Kecamatan</span>
                        <select
                          name="kecamatan"
                          className="form-control"
                          onChange={event =>
                            this.setState({
                              kecamatan: event.target.value
                            })
                          }
                          required
                        >
                          <option value="Sail">Sail</option>
                          <option value="Rumbai">Rumbai</option>
                        </select>
                      </label>
                    </div>
                    <div className="col-sm-4">
                      <label>
                        <span>
                          Kode Pos <span className="required">*</span>
                        </span>
                        <input
                          type="number"
                          className="form-control"
                          name="kode_pos"
                          onChange={event =>
                            this.setState({
                              kode_pos: event.target.value
                            })
                          }
                          required
                        />
                      </label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6">
                      <label>
                        <span>
                          Telpon <span className="required">*</span>
                        </span>
                        <input
                          type="number"
                          className="form-control"
                          name="telpon"
                          onChange={event =>
                            this.setState({
                              telepon: event.target.value
                            })
                          }
                          required
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
                          name="telpon"
                          onChange={event =>
                            this.setState({
                              handphone: event.target.value
                            })
                          }
                          required
                        />
                      </label>
                    </div>
                  </div>
                  <label>
                    <span>
                      Email <span className="required">*</span>
                    </span>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      onChange={event =>
                        this.setState({
                          email: event.target.value
                        })
                      }
                      required
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
                          onChange={event =>
                            this.setState({
                              pendidikan: event.target.value
                            })
                          }
                          required
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
                          onChange={event =>
                            this.setState({
                              pekerjaan: event.target.value
                            })
                          }
                          required
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
                      onChange={event =>
                        this.setState({
                          kantor: event.target.value
                        })
                      }
                      required
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
                        />
                      </label>
                    </div>
                    <div className="col-sm">
                      <label>
                        <span>Telpon</span>
                        <input
                          type="number"
                          className="form-control"
                          name="telpon_penanggungjawab"
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
                    onClick={event => this.tambahPasienBaru(event)}
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
          </form>
        </div>
      </div>
    );
  }
}

export default FormPendaftaran;

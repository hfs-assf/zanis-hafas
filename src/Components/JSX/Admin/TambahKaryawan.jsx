import React, { Component } from "react";
import tambahUser from "../../../Methods/User/Akun/tambahUser";

class TambahKaryawan extends Component {
  state = {
    showMe: false,
    nik: "",
    nama_karyawan: "",
    peran: "Dokter",
    email: "",
    username: "",
    password: "",
    modul: "Pendaftaran"
  };

  showHide(e) {
    var hasil = e.target.value;
    if (hasil === "false") {
      this.setState({ showMe: true });
    } else {
      this.setState({ showMe: false });
    }
  }

  tambahUser = event => {
    event.preventDefault();
    tambahUser({
      nik: this.state.nik,
      password: this.state.password,
      nama: this.state.nama_karyawan,
      email: this.state.email,
      akses: this.state.modul
    });
  };

  render() {
    return (
      <div
        className="modal fade right"
        id="tambahKaryawan"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="myModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-right" role="document">
          <div className="modal-content">
            <div className="modal-header info-color text-white text-center ">
              <h4 className="modal-title w-100" id="myModalLabel">
                Form Tambah Karyawan
              </h4>

              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true" className="white-text">
                  &times;
                </span>
              </button>
            </div>

            <div className="modal-body">
              <form method="POST">
                <div className="row">
                  <div className="col-md-12">
                    <div className="md-form mb-0">
                      <input
                        type="number"
                        name="nik_karyawan"
                        className="form-control"
                        placeholder="Masukkan Nomor Induk Kepegawaian"
                        onChange={event =>
                          this.setState({
                            nik: event.target.value
                          })
                        }
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="md-form mb-0">
                      <input
                        type="text"
                        name="nama_karyawan"
                        className="form-control"
                        placeholder="Nama Karyawan"
                        onChange={event =>
                          this.setState({
                            nama_karyawan: event.target.value
                          })
                        }
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="md-form mb-0">
                      <span>Peran</span>
                      <select
                        className="custom-select"
                        name="peran_karyawan"
                        onChange={event =>
                          this.setState({
                            peran: event.target.value
                          })
                        }
                        required
                      >
                        <option value="1">Dokter</option>
                        <option value="2">Bidan</option>
                        <option value="2">Perawat</option>
                        <option value="2">Administrasi</option>
                        <option value="2">Apoteker</option>
                        <option value="2">Kasir</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="md-form mb-0">
                      <input
                        type="checkbox"
                        className="custom-checkbox"
                        value={this.state.showMe}
                        onClick={e => this.showHide(e)}
                      />
                      <span> Jadikan sebagai pengguna </span>
                    </div>
                  </div>
                </div>
                {this.state.showMe ? (
                  <div>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="md-form mb-0">
                          <span>Modul</span>
                          <input
                            type="email"
                            name="email"
                            className="form-control"
                            placeholder="Email"
                            onChange={event =>
                              this.setState({
                                email: event.target.value
                              })
                            }
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="md-form mb-0">
                          <input
                            type="text"
                            name="username"
                            className="form-control"
                            placeholder="Username"
                            onChange={event =>
                              this.setState({
                                username: event.target.value
                              })
                            }
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="md-form mb-0">
                          <input
                            type="password"
                            name="password"
                            className="form-control"
                            placeholder="Password"
                            onChange={event =>
                              this.setState({
                                password: event.target.value
                              })
                            }
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="md-form mb-0">
                          <span>Modul</span>
                          <select
                            className="custom-select"
                            name="modul"
                            onChange={event =>
                              this.setState({
                                modul: event.target.value
                              })
                            }
                          >
                            <option value="1">Pendaftaran</option>
                            <option value="2">Pelayanan Medis</option>
                            <option value="3">Apotek</option>
                            <option value="4">Kasir</option>
                            <option value="5">Administrasi</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : null}
              </form>
            </div>

            <div className="modal-footer justify-content-center">
              <button
                className="btn btn-primary"
                onClick={event => this.tambahUser(event)}
              >
                Simpan
              </button>
              <button
                className="btn btn-outline-primary waves-effect"
                data-dismiss="modal"
              >
                Batal
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TambahKaryawan;

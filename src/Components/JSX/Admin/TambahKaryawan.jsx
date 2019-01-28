import React, { Component } from "react";
import tambahUser from "../../../Methods/User/Akun/tambahUser";
import editUser from "../../../Methods/User/Akun/editUser";
import Sukses from "../Animasi/Sukses";
import Gagal from "../Animasi/Gagal";

class TambahKaryawan extends Component {
  constructor(props) {
    super(props);
    this.handleSave = this.handleSave.bind(this);
    this.state = {
      showMe: false,
      uid: "",
      nik: "",
      nama: "",
      role: "Dokter",
      email: "",
      password: "",
      akses: "Pendaftaran",
      notification: ""
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.action === "edit") {
      this.setState({
        showMe: nextProps.selected.email ? true : false,
        uid: nextProps.selected.uid,
        nik: nextProps.selected.nik,
        nama: nextProps.selected.nama,
        // role: nextProps.selected.role,
        email: nextProps.selected.email,
        password: nextProps.selected.password
        // akses: nextProps.selected.akses
      });
      React.createElement("input", {
        type: "checkbox",
        id: "showHide",
        defaultChecked: true
      });
    } else {
      this.setState({
        showMe: false,
        uid: "",
        nik: "",
        nama: "",
        role: "Dokter",
        email: "",
        password: "",
        akses: "Pendaftaran"
      });
    }
  }

  handleSave() {
    if (this.props.action === "add") {
      tambahUser({
        nik: this.state.nik,
        password: this.state.password,
        nama: this.state.nama,
        email: this.state.email,
        akses: this.state.akses
      })
        .then(() => {
          this.setState({ notification: <Sukses /> });
        })
        .catch(() => this.setState({ notification: <Gagal /> }));
    } else {
      editUser({
        nik: this.state.nik,
        password: this.state.password,
        nama: this.state.nama,
        email: this.state.email,
        akses: this.state.akses
      })
        .then(() => {
          this.setState({ notification: <Sukses /> });
        })
        .catch(() => this.setState({ notification: <Gagal /> }));
    }
  }

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
                {this.props.action === "add" ? "Tambah" : "Ubah"} Data Karyawan
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
                        value={this.state.nik}
                        placeholder="Masukkan Nomor Induk Kepegawaian"
                        onChange={event =>
                          this.setState({
                            nik: event.target.value
                          })
                        }
                        disabled={this.props.action === "add" ? false : true}
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="md-form mb-0">
                      <input
                        type="text"
                        name="nama"
                        className="form-control"
                        value={this.state.nama}
                        placeholder="Nama Karyawan"
                        onChange={event =>
                          this.setState({
                            nama: event.target.value
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
                        name="role_karyawan"
                        value={this.state.role}
                        onChange={event =>
                          this.setState({
                            role: event.target.value
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
                        id="showHide"
                        onClick={() =>
                          this.setState({ showMe: !this.state.showMe })
                        }
                      />
                      <span> Jadikan sebagai pengguna </span>
                    </div>
                  </div>
                </div>
                {this.state.showMe ? (
                  <div>
                    <div className="row">
                      <div className="col-md-8">
                        <div className="md-form mb-0">
                          <input
                            type="email"
                            name="email"
                            className="form-control"
                            value={this.state.email}
                            placeholder="Email"
                            onChange={event =>
                              this.setState({
                                email: event.target.value
                              })
                            }
                          />
                        </div>
                      </div>
                      <div className="col-md-4">
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
                          <span>Akses</span>
                          <select
                            className="custom-select"
                            name="akses"
                            onChange={event =>
                              this.setState({
                                akses: event.target.value
                              })
                            }
                          >
                            <option value="Pendaftaran">Pendaftaran</option>
                            <option value="Pelayanan Medis">
                              Pelayanan Medis
                            </option>
                            <option value="Apotek">Apotek</option>
                            <option value="Kasir">Kasir</option>
                            <option value="Administrasi">Administrasi</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : null}
              </form>
              {this.state.notification}
            </div>

            <div className="modal-footer justify-content-center">
              <button
                className="btn btn-primary"
                onClick={this.handleSave}
                disabled={!this.state.nik || !this.state.nama}
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

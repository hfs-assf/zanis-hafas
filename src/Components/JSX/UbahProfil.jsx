import React, { Component } from "react";

class UbahProfil extends Component {
  state = {
    keterangan1: "",
    keterangan2: "",
    pass1: "",
    pass2: "",
    classPass1: "",
    classPass2: ""
  };

  cekPassword(name, e) {
    if (name === "pass1") {
      this.setState({ pass1: e.target.value });
      if (this.state.pass1.length < 8) {
        this.setState({
          keterangan1: "Jumlah minimal password 8 karakter",
          classPass1: "desc-column invalid"
        });
      } else {
        this.setState({ keterangan1: "" });
      }
    } else if (name === "pass2") {
      this.setState({ pass2: e.target.value });
    }
    const { pass1, pass2 } = this.state;
    const matches = pass1 === pass2;
    matches
      ? this.setState({
          keterangan2: "Password cocok",
          classPass2: "desc-column"
        })
      : this.setState({
          keterangan2: "Password tidak cocok",
          classPass2: "desc-column invalid"
        });
  }

  render() {
    return (
      <div
        className="modal fade right"
        id="ubahProfil"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="myModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-right" role="document">
          <div className="modal-content">
            <div className="modal-header info-color text-white text-center ">
              <h4 className="modal-title w-100" id="myModalLabel">
                Ubah Profil
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
              <form id="contact-form" name="contact-form" method="POST">
                <div className="row">
                  <div className="col-md-12">
                    <div className="md-form mb-0">
                      <span>Nomor Induk Karyawan</span>

                      <input
                        type="number"
                        id="nik_karyawan"
                        name="nik_karyawan"
                        className="form-control"
                        value="1120112121"
                        disabled
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="md-form mb-0">
                      <span>Nama</span>

                      <input
                        type="text"
                        id="nama_karyawan"
                        name="nama_karyawan"
                        className="form-control"
                        value="Tuti Triastuti"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="md-form mb-0">
                        <span>Username</span>

                        <input
                          type="text"
                          id="username"
                          name="username"
                          className="form-control"
                          value="Tutitutututut"
                          disabled
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="md-form mb-0">
                        <span>Password</span>

                        <input
                          type="password"
                          id="password"
                          name="password"
                          className="form-control"
                          placeholder="Password"
                          onKeyUp={e => this.cekPassword("pass1", e)}
                        />
                        <span className={this.state.classPass1}>
                          {this.state.keterangan1}
                        </span>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="md-form mb-0">
                        <span>Konfirmasi Password</span>

                        <input
                          type="password"
                          id="konfirmasi_password"
                          name="konfirmasi_password"
                          className="form-control"
                          placeholder="Password"
                          onKeyUp={e => this.cekPassword("pass2", e)}
                        />
                        <span className={this.state.classPass2}>
                          {this.state.keterangan2}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>

            <div className="modal-footer justify-content-center">
              <button className="btn btn-primary">Simpan</button>
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

export default UbahProfil;

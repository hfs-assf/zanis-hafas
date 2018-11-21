import React, { Component } from "react";

class TambahDataPegawai extends Component {
  render() {
    return (
      <div
        className="modal fade"
        id="tambahPegawai"
        tabindex="-1"
        role="dialog"
        aria-labelledby="myModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-notify modal-info" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <p className="heading lead">Form Tambah Pegawai</p>

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
                      <input
                        type="number"
                        id="nik_pegawai"
                        name="nik_pegawai"
                        className="form-control"
                        placeholder="Masukkan Nomor Induk Kepegawaian"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="md-form mb-0">
                      <input
                        type="text"
                        id="nama_pegawai"
                        name="nama_pegawai"
                        className="form-control"
                        placeholder="Nama Pegawai"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="md-form mb-0">
                      <input
                        type="text"
                        id="password"
                        name="password"
                        className="form-control"
                        placeholder="Password"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="md-form mb-0">
                      <span>Divisi</span>
                      <select className="custom-select" name="divisi_pegawai">
                        <option value="1">IT</option>
                        <option value="2">Terapis</option>
                        <option value="2">Ruqyah</option>
                      </select>
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

export default TambahDataPegawai;

import React, { Component } from "react";

class TambahDaftarTindakan extends Component {
  render() {
    return (
      <div
        className="modal fade"
        id="tambahBiayaTindakan"
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
                        type="text"
                        id="nama_tindakan"
                        name="nama_tindakan"
                        className="form-control"
                        placeholder="Nama Tindakan"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="md-form mb-0">
                      <input
                        type="number"
                        id="harga_tindakan"
                        name="harga_tindakan"
                        className="form-control"
                        placeholder="Harga Tindakan"
                      />
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

export default TambahDaftarTindakan;

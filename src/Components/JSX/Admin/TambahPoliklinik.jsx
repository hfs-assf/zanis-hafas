import React, { Component } from "react";
import tambahPoliklinik from "../../../Methods/Admin/tambahPoliknliki";

class TambahPoliklinik extends Component {
  tambahPoli = event => {
    event.preventDefault();
    let { nama_poli } = this.refs;
    tambahPoliklinik({ nama_poli: nama_poli.value })
      .then(response => console.log(response))
      .catch(() => alert("error"));
  };

  render() {
    return (
      <div
        className="modal fade right"
        id="tambahPoliklinik"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="myModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-right" role="document">
          <div className="modal-content">
            <div className="modal-header info-color text-white text-center ">
              <h4 className="modal-title w-100" id="myModalLabel">
                Tambah Poliklinik
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
                      <input
                        type="number"
                        ref="nama_poli"
                        className="form-control"
                        placeholder="Masukkan Nama Poliklinik"
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>

            <div className="modal-footer justify-content-center">
              <button className="btn btn-primary" onClick={this.tambahPoli}>
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

export default TambahPoliklinik;

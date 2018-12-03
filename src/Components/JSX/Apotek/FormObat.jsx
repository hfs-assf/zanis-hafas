import React, { Component } from "react";

class FormObat extends Component {
  render() {
    return (
      <div
        className="modal fade right"
        id="addmedicine"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="myModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-right" role="document">
          <div className="modal-content">
            <div className="modal-header info-color white-text text-center py-4">
              <h4 className="modal-title w-100" id="myModalLabel">
                Tambah Daftar Obat
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
                        type="text"
                        id="nama_obat"
                        name="nama_obat"
                        className="form-control"
                        placeholder="Nama Obat"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="md-form mb-0">
                      <input
                        type="text"
                        id="jumlah"
                        name="jumlah"
                        className="form-control"
                        placeholder="Jumlah"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="md-form mb-0">
                      <input
                        type="text"
                        id="satuan"
                        name="satuan"
                        className="form-control"
                        placeholder="Satuan"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="md-form mb-0">
                      <input
                        type="text"
                        id="harga_beli"
                        name="harga_beli"
                        className="form-control"
                        placeholder="Harga Beli"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="md-form mb-0">
                      <input
                        type="text"
                        id="harga_jual"
                        name="harga_jual"
                        className="form-control"
                        placeholder="Harga Jual"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="md-form mb-0">
                      <span>Masa Berlaku</span>

                      <input
                        type="date"
                        id="masa_berlaku"
                        name="masa_berlaku"
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="md-form mb-0">
                      <span>Jenis Obat</span>
                      <select className="custom-select" name="jenis_obat">
                        <option value="1">Minum</option>
                        <option value="2">Makan</option>
                      </select>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="modal-footer justify-content-center">
              <button className="btn btn-info">Simpan</button>
              <button className="btn btn-outline-info" data-dismiss="modal">
                Kembali
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default FormObat;

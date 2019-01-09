import React, { Component } from "react";

class ListCOA extends Component {
  render() {
    return (
      <div className="container-fluid" style={{ marginLeft: "-20px" }}>
        <button
          type="button"
          class="btn btn-sm btn-primary"
          data-toggle="modal"
          data-target="#tambahCOA"
        >
          Tambah Daftar Akun
        </button>
        <div
          className="modal fade right"
          id="tambahCOA"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="myModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-right" role="document">
            <div className="modal-content">
              <div className="modal-header info-color white-text text-center py-4">
                <h4 className="modal-title w-100" id="myModalLabel">
                  Tambah Daftar Akun
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
                <div className="row ">
                  <div className="col-md-12 ">
                    <div className="custom-radios">
                      <div>
                        <input
                          type="radio"
                          id="color-1"
                          name="keterangan"
                          value="0"
                        />
                        <label htmlFor="color-1" className="radio-inline">
                          <span />
                        </label>
                        Header
                      </div>

                      <div className="ml-2">
                        <input
                          type="radio"
                          id="color-2"
                          name="keterangan"
                          value="1"
                          defaultChecked
                        />
                        <label htmlFor="color-2" className="radio-inline">
                          <span />
                        </label>
                        Detail
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="md-form mb-0">
                      <span>Jenis Akun</span>
                      <select className="form-control">
                        <option value="Aset">Aset</option>
                        <option value="Hutang">Hutang</option>
                        <option value="Ekuitas">Ekuitas</option>
                        <option value="Pendapatan">Pendapatan</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="md-form mb-0">
                      <input
                        type="text"
                        name="no_akun"
                        className="form-control"
                        placeholder="Nomor Akun"
                        required
                      />
                    </div>
                  </div>

                  <div className="col-md-8">
                    <div className="md-form mb-0">
                      <input
                        type="text"
                        name="nama_akun"
                        className="form-control"
                        placeholder="Nama Akun"
                        required
                      />
                    </div>
                  </div>
                </div>
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

        {/* <div
          class="modal fade"
          id="tambahCOA"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  LIST Chart Of Account (COA)
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <div className="row">
                  <div className="custom-radios">
                    <div>
                      <input
                        type="radio"
                        id="color-1"
                        name="keterangan"
                        value="0"
                      />
                      <label htmlFor="color-1" className="radio-inline">
                        <span />
                      </label>
                      Header
                    </div>

                    <div className="ml-2">
                      <input
                        type="radio"
                        id="color-2"
                        name="keterangan"
                        value="1"
                        defaultChecked
                      />
                      <label htmlFor="color-2" className="radio-inline">
                        <span />
                      </label>
                      Detail
                    </div>
                  </div>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-primary"
                    data-dismiss="modal"
                  >
                    Tutup
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    );
  }
}

export default ListCOA;

import React, { Component } from "react";

class TambahAntrian extends Component {
  constructor() {
    super();
    this.state = {
      showMe: false
    };
  }

  showHide(value) {
    this.setState({ showMe: value });
  }

  kembali() {
    window.location.assign("/pendaftaran");
  }
  render() {
    return (
      <form>
        <div className="flex-container">
          <div className="box column1">
            <h2 className="card-title text-left">
              Pendaftaran Pelayanan Medis
            </h2>
          </div>
        </div>
        <hr className="hr2" />
        <div className="form-group row">
          <label htmlFor="inputjenispasien" className="col-sm-4 col-form-label">
            Jenis Pasien
            <span className="required">*</span>
          </label>
          <div className="col-sm-5 mt-1">
            <div className="custom-radios">
              <div>
                <input
                  type="radio"
                  id="color-1"
                  name="janispasien"
                  value="color-1"
                  onClick={() => this.showHide(false)}
                />
                <label htmlFor="color-1" className="radio-inline">
                  <span />
                </label>
                Umum
              </div>

              <div className="ml-2">
                <input
                  type="radio"
                  id="color-2"
                  name="janispasien"
                  value="color-2"
                  onClick={() => this.showHide(true)}
                />
                <label htmlFor="color-2" className="radio-inline">
                  <span />
                </label>
                Asuransi / Jaminan
              </div>
            </div>
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="LayananMedis" className="col-sm-4 col-form-label">
            Layanan Medis
            <span className="required">*</span>
          </label>
          <div className="col-sm-5">
            <select className="form-control">
              <option>Rawat Jalan</option>
              <option>Laboratorium</option>
            </select>
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="NamaDokter" className="col-sm-4 col-form-label">
            Nama Dokter
            <span className="required">*</span>
          </label>
          <div className="col-sm-5">
            <select className="form-control">
              <option>dr. Miaw</option>
              <option>dr. Kucing</option>
              <option>dr. Suci</option>
            </select>
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="Poliklinik" className="col-sm-4 col-form-label">
            Poliklinik
            <span className="required">*</span>
          </label>
          <div className="col-sm-5">
            <select className="form-control">
              <option>Umum</option>
              <option>Gigi</option>
            </select>
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="TanggalMasuk" className="col-sm-4 col-form-label">
            Tanggal Masuk
            <span className="required">*</span>
          </label>
          <div className="col-sm-5">
            <input
              type="date"
              className="form-control"
              id="inputPassword"
              placeholder="L"
            />
          </div>
        </div>
        {this.state.showMe ? (
          <div className="animated fadeInRight">
            <h4>Asuransi / Jaminan</h4>
            <div className="form-group row">
              <label htmlFor="KelasFaskes" className="col-sm-4 col-form-label">
                Kelas <span className="required">*</span>
              </label>
              <div className="col-sm-5">
                <input type="text" name="kelas" className="form-control" />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="KelasFaskes" className="col-sm-4 col-form-label">
                Faskes
                <span className="required">*</span>
              </label>
              <div className="col-sm-5">
                <input type="text" name="faskes" className="form-control" />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="KelasFaskes" className="col-sm-4 col-form-label">
                Nomor Kartu <span className="required">*</span>
              </label>
              <div className="col-sm-5">
                <input type="text" name="no_kartu" className="form-control" />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="KelasFaskes" className="col-sm-4 col-form-label">
                Tanggal Valid
                <span className="required">*</span>
              </label>
              <div className="col-sm-5">
                <input
                  type="date"
                  name="tanggal_valid"
                  className="form-control"
                />
              </div>
            </div>
          </div>
        ) : null}
        <div className="col-md-12">
          <div className="modal-footer justify-content-center">
            <button className="btn btn-primary">Simpan</button>
            <button
              className="btn btn-outline-primary"
              onClick={() => this.kembali()}
            >
              Kembali
            </button>
          </div>
        </div>
      </form>
    );
  }
}
export default TambahAntrian;

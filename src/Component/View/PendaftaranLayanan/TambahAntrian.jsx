import React, { Component } from "react";
import "../../CSS/TambahPelayananAntrian.css";
import { Link } from "react-router-dom";

class TambahAntrianPelayanan extends Component {
  constructor() {
    super();
    this.state = {
      showMe: false
    };
  }

  showHide(value) {
    this.setState({ showMe: value });
  }

  render() {
    return (
      <form>
        <div className="form-group row">
          <label htmlFor="inputjenispasien" className="col-sm-2 col-form-label">
            Jenis Pasien
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

              <div className="ml-4">
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
        {this.state.showMe ? (
          <div className="col-md-5 col-sm-6 col-xs-5 animated fadeInRight stylejaminan">
            <div className="form-style">
              <fieldset className="item3">
                <legend>Asuransi / Jaminan</legend>
                <label>
                  <span>
                    Kelas <span className="required">*</span>
                  </span>
                  <input type="text" name="kelas" className="form-control" />
                </label>
                <label>
                  <span>
                    Faskes
                    <span className="required">*</span>
                  </span>
                  <input type="text" name="faskes" className="form-control" />
                </label>
                <label>
                  <span>
                    Nomor Kartu <span className="required">*</span>
                  </span>
                  <input type="text" name="no_kartu" className="form-control" />
                </label>
                <label>
                  <span>
                    Tanggal Valid
                    <span className="required">*</span>
                  </span>
                  <input
                    type="date"
                    name="tanggal_valid"
                    className="form-control"
                  />
                </label>
              </fieldset>
            </div>
          </div>
        ) : null}
        <div className="form-group row">
          <label htmlFor="LayananMedis" className="col-sm-2 col-form-label">
            Layanan Medis
          </label>
          <div className="col-sm-5">
            <select className="form-control">
              <option>Rawat Jalan</option>
              <option>Laboratorium</option>
            </select>
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="NamaDokter" className="col-sm-2 col-form-label">
            Nama Dokter
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
          <label htmlFor="Poliklinik" className="col-sm-2 col-form-label">
            Poliklinik
          </label>
          <div className="col-sm-5">
            <select className="form-control">
              <option>Umum</option>
              <option>Gigi</option>
            </select>
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="TanggalMasuk" className="col-sm-2 col-form-label">
            Tanggal Masuk
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
        <button className="btn btn-info">Simpan</button>
        <Link to="/pendaftaran">
          <button className="btn btn-outline-info">Kembali</button>
        </Link>
      </form>
    );
  }
}
export default TambahAntrianPelayanan;

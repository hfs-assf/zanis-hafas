import React, { Component } from "react";

class UbahProfilKlinik extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-1" />
        <div className="col-md-3">
          <div className="member-card">
            <div className="thumb-xl member-thumb  center-block">
              <img
                src="https://image.flaticon.com/icons/svg/149/149071.svg"
                className="img-fluid"
                alt="pasien"
                style={{ width: "200px", height: "200px" }}
              />
              <h5 className="header-title indigo-text">Ubah Logo Klinik</h5>
            </div>
          </div>
        </div>
        <div className="col-md-1" />

        <div className="col-md-6">
          <form>
            <div className="form-group row">
              <label htmlFor="nama_klinik" className="col-sm-4 col-form-label">
                Nama Klinik
                <span className="required">*</span>
              </label>
              <div className="col-sm-8">
                <input
                  type="text"
                  name="nama_klinik"
                  className="form-control"
                />
              </div>
            </div>
            <div className="form-group row">
              <label
                htmlFor="alamat_klinik"
                className="col-sm-4 col-form-label"
              >
                Alamat
                <span className="required">*</span>
              </label>
              <div className="col-sm-8">
                <input
                  type="text"
                  name="alamat_klinik"
                  className="form-control"
                />
              </div>
            </div>
            <div className="form-group row">
              <label
                htmlFor="telpon_klinik"
                className="col-sm-4 col-form-label"
              >
                Telpon
                <span className="required">*</span>
              </label>
              <div className="col-sm-8">
                <input
                  type="text"
                  name="telpon_klinik"
                  className="form-control"
                />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="email_klinik" className="col-sm-4 col-form-label">
                Email
                <span className="required">*</span>
              </label>
              <div className="col-sm-8">
                <input
                  type="text"
                  name="email_klinik"
                  className="form-control"
                />
              </div>
            </div>
            <div className="form-group row">
              <label
                htmlFor="website_klinik"
                className="col-sm-4 col-form-label"
              >
                Website
                <span className="required">*</span>
              </label>
              <div className="col-sm-8">
                <input
                  type="text"
                  name="website_klinik"
                  className="form-control"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default UbahProfilKlinik;

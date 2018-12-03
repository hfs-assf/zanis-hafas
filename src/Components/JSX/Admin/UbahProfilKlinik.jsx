import React, { Component } from "react";

class UbahProfilKlinik extends Component {
  state = {
    selectedFile: null,
    judul: ""
  };

  fileChangedHandler = event => {
    // const file = event.target.files[0];
    // console.log(event.target.files[0]);
    this.setState({
      selectedFile: event.target.files[0],
      judul: event.target.files[0].name
    });
  };
  uploadHandler = () => {
    // const formData = new FormData();
    // formData.append(
    //   "image",
    //   this.state.selectedFile,
    //   this.state.selectedFile.name
    // );
    // axios.post("https://zanis-786d9.firebaseio.com/", formData, {
    //   onUploadProgress: progressEvent => {
    //     console.log(progressEvent.loaded / progressEvent.total);
    //   }
    // });
    // axios.post("https://zanis-786d9.firebaseio.com/", this.state.selectedFile);
    console.log(this.state.judul);
  };
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
                onClick={() => this.fileInput.click()}
              />
              <input
                style={{ display: "none" }}
                type="file"
                onChange={e => this.fileChangedHandler(e)}
                ref={fileInput => (this.fileInput = fileInput)}
              />
              <label>{this.state.judul}</label>
              <h5 onClick={() => this.fileInput.click()}>
                Ubah Foto Profil Klinik
              </h5>
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
            <div className="row">
              <div className="col-md-12">
                <div className="modal-footer justify-content-center">
                  <button
                    className="btn btn-primary"
                    onClick={() => this.uploadHandler()}
                  >
                    Simpan
                  </button>
                  <button className="btn btn-warning">Bersihkan</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default UbahProfilKlinik;

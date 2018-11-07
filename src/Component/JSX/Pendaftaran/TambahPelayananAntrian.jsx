import React, { Component } from "react";
import "../../CSS/TambahPelayananAntrian.css";
import ProfileKiriPasien from "../../View/PendaftaranLayanan/ProfileKiriPasien";
import FormAntrianPelayanan from "../../View/PendaftaranLayanan/TambahAntrian";
class TambahAntrianPelayanan extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div
          className="alert alert-warning alert-dismissible fade show"
          role="alert"
        >
          <strong>Lengkapi form dibawah ini</strong> untuk menambahkan pasien
          kedalam antrian pelayanan.
          <button
            type="button"
            className="close"
            data-dismiss="alert"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="row">
          <div className="col-md-3 hidden-sm hidden-xs">
            <ProfileKiriPasien pasien={this.props.antrian.id} />
          </div>
          <div className="col-md-8 order-first order-md-2 card-box1">
            <FormAntrianPelayanan pasien={this.props.antrian.id} />
          </div>
        </div>
      </div>
    );
  }
}

export default TambahAntrianPelayanan;

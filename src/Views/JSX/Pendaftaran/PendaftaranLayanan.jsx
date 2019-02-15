import React, { Component } from "react";
import "../../../Components/ASSETS/CSS/TambahPelayananAntrian.css";
import ProfileKiriPasien from "../../../Components/JSX/Pendaftaran/DaftarPelayananMedis/ProfileKiriPasien";
import FormAntrianPelayanan from "../../../Components/JSX/Pendaftaran/DaftarPelayananMedis/TambahAntrian";

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
          <div className="col-md-5 hidden-sm hidden-xs">
            <ProfileKiriPasien pasien={this.props.antrian.id} />
          </div>
          <div className="col-md-7">
            <FormAntrianPelayanan pasien={this.props.antrian.id} />
          </div>
        </div>
      </div>
    );
  }
}

export default TambahAntrianPelayanan;

import React, { Component } from "react";
import "../../CSS/TambahPelayananAntrian.css";
import ProfileKiriPasien from "../../View/PendaftaranLayanan/ProfileKiriPasien";
import TambahAntrianPelayanan from "../../View/PendaftaranLayanan/TambahAntrian";

class Sidebar extends Component {
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
            <ProfileKiriPasien />
          </div>
          <div className="col-md-8 card-box ml-5">
            <TambahAntrianPelayanan />
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;

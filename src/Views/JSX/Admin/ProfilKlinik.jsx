import React, { Component } from "react";
import FormProfil from "../../../Components/JSX/Admin/UbahProfilKlinik";

class ProfilKlinik extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div
          className="card"
          style={{ width: "99%", borderTop: "2px solid #1976d2" }}
        >
          <div className="card-body">
            <div className="flex-container">
              <div className="box column1">
                <h2 className="card-title text-left">Profil Klinik</h2>
              </div>
            </div>
            <hr className="hr2" />
            <div
              className="alert alert-warning alert-dismissible fade show"
              role="alert"
            >
              <strong>Lengkapi form dibawah ini</strong> untuk mengubah data
              klinik.
              <button
                type="button"
                className="close"
                data-dismiss="alert"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <FormProfil />
          </div>
        </div>
      </div>
    );
  }
}

export default ProfilKlinik;

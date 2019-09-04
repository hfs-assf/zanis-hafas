import React, { Component } from "react";
import "../../../Components/ASSETS/CSS/Pendaftaran.css";
import CariPasien from "../../../Components/JSX/Pendaftaran/CariPasien";
import FormPendaftaran from "../../../Components/JSX/Pendaftaran/FormPendaftaran";

class Pendaftaran extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-body">
          <div className="flex-container">
            <div className="box column1">
              <h2 className="card-title text-left">Pendaftaran Pasien Baru</h2>
            </div>
            <div className="box column2">
              <CariPasien />
            </div>
          </div>
          <hr className="hr2" />
          <div
            className="alert alert-warning alert-dismissible fade show"
            role="alert"
          >
            <strong>
              Sesudah menginput data pasien atau melihat data pasien lama
            </strong>
            <span> klik menu pencarian. </span>

            <button
              type="button"
              className="close"
              data-dismiss="alert"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <FormPendaftaran />
        </div>
      </div>
    );
  }
}

export default Pendaftaran;

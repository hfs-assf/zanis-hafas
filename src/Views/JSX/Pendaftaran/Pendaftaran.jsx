import React, { Component } from "react";
import "../../../Components/ASSETS/CSS/Pendaftaran.css";
import ViewPencarian from "../../../Components/JSX/Pendaftaran/CariPasien";
import FormTambah from "../../../Components/JSX/Pendaftaran/Pendaftaran";

class Pendaftaran extends Component {
  render() {
    return (
      <div
        className="card"
        style={{ width: "99%", borderTop: "2px solid #1976d2" }}
      >
        <div className="card-body">
          <div className="flex-container">
            <div className="box column1">
              <h2 className="card-title text-left">Pendaftaran Pasien</h2>
            </div>

            <div className="box column2">
              <ViewPencarian />
            </div>
          </div>
          <hr className="hr2" />
          <div
            className="alert alert-warning alert-dismissible fade show"
            role="alert"
          >
            <strong>Untuk melihat data pasien lama</strong> klik menu pencarian.
            <button
              type="button"
              className="close"
              data-dismiss="alert"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <FormTambah />
        </div>
      </div>
    );
  }
}

export default Pendaftaran;

import React, { Component } from "react";
import ViewRekamMedis from "../../../Components/JSX/RekamMedis/ViewRekamMedis";

class RekamMedisPasien extends Component {
  render() {
    return (
      <div
        className="card"
        style={{ width: "99%", borderTop: "2px solid #1976d2" }}
      >
        <div className="card-body">
          <div className="flex-container">
            <div className="box column1">
              <h2 className="card-title text-left">Rekam Medis Pasien</h2>
            </div>

            <div className="box column2" />
          </div>
          <hr className="hr2" />
          <div
            className="alert alert-warning alert-dismissible fade show"
            role="alert"
          >
            Lakukan pencarian berdasarkan nama pasien, tanggal masuk atau jenis
            kelamin lalu klik <strong>Lihat Detail</strong>
            <button
              type="button"
              className="close"
              data-dismiss="alert"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <ViewRekamMedis />
        </div>
      </div>
    );
  }
}

export default RekamMedisPasien;

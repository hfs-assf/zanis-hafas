import React, { Component } from "react";
import DataRMPasien from "../../../../Components/JSX/PelayananMedis/RekamMedis/DataRekamMedisPasien";

class DaftarRekamMedis extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div
          className="alert alert-danger alert-dismissible fade show"
          role="alert"
        >
          <strong>Cari Daftar Rekam Medis</strong>

          <button
            type="button"
            className="close"
            data-dismiss="alert"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>

        <DataRMPasien />
      </div>
    );
  }
}

export default DaftarRekamMedis;

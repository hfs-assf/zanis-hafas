import React, { Component } from "react";
import DetailRM from "../../../../Components/JSX/PelayananMedis/RekamMedis/DataRekamMedisPasien";

class DaftarRekamMedis extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div
          className="alert alert-danger alert-dismissible fade show"
          role="alert"
        >
          <strong>Antrian Pelayanan Medis</strong>

          <button
            type="button"
            className="close"
            data-dismiss="alert"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>

        <DetailRM />
      </div>
    );
  }
}

export default DaftarRekamMedis;

import React, { Component } from "react";
import FormPelayananMedis from "../../../Components/JSX/PelayananMedis/FormPelayananMedis";
import "../../../Components/ASSETS/CSS/form.css";
class PelayananMedis extends Component {
  render() {
    return (
      <div
        className="card"
        style={{ width: "99%", borderTop: "2px solid #1976d2" }}
      >
        <div className="card-body">
          <div className="flex-container">
            <div className="box column1">
              <h2 className="card-title text-left">Pelayanan Medis</h2>
            </div>

            <div className="box column2" />
          </div>
          <hr className="hr2" />
          <div
            className="alert alert-warning alert-dismissible fade show"
            role="alert"
          >
            <strong>Lengkapi Form Pelayanan dengan dengan mengklik </strong>{" "}
            salah satu menu SOAP, Resep Obat, Tindakan dan Laboratorium dibawah.
            <button
              type="button"
              className="close"
              data-dismiss="alert"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

          <FormPelayananMedis pasien={this.props.antrian.id} />
        </div>
      </div>
    );
  }
}

export default PelayananMedis;

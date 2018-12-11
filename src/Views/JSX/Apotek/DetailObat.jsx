import React, { Component } from "react";
import "../../../Components/ASSETS/CSS/Pendaftaran.css";
import FormDetailObat from "../../../Components/JSX/Apotek/FormDetailObat";
import TableDetailObat from "../../../Components/JSX/Apotek/TableDetailObat";
import TambahObatMasuk from "../../../Components/JSX/Apotek/FormTambahDetailObat";

class DetailObat extends Component {
  render() {
    return (
      <div
        className="card"
        style={{ width: "99%", borderTop: "2px solid #1976d2" }}
      >
        <div className="card-body">
          <div className="flex-container">
            <div className="box column1">
              <h2 className="card-title text-left">Detail Obat</h2>
            </div>
          </div>
          <hr className="hr2" />
          <div
            className="alert alert-warning alert-dismissible fade show"
            role="alert"
          >
            <strong>Untuk mrnyimpan data obat</strong> klik menu simpan.
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
            <FormDetailObat uid={this.props.uid.id} />
            <TableDetailObat uid={this.props.uid.id} />
            <TambahObatMasuk uid={this.props.uid.id} />
          </div>
        </div>
      </div>
    );
  }
}

export default DetailObat;

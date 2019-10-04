import React, { Component } from "react";
import "../../ASSETS/CSS/form.css";
import ProfilePesanan from "./ProfilePesanan";
import TabPesananObat from "./TabPesananObat";

export class DataAntrian extends Component {
  render() {
    return (
      <div className="card" style={{ width: "99%" }}>
        <div className="card-body">
          <div className="flex-container">
            <div className="box column1">
              <h2 className="card-title text-left">Daftar Pesanan</h2>
            </div>

            <div className="box column2" />
          </div>
          <hr className="hr2" />
          <div
            className="alert alert-warning alert-dismissible fade show"
            role="alert"
          >
            <strong>Lengkapi Daftar Pesanan Obat </strong>
            <button
              type="button"
              className="close"
              data-dismiss="alert"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

          <ProfilePesanan
            uid={this.props.antrian_pasien}
            no_rm={this.props.no_rm}
          />
          <TabPesananObat
            uid={this.props.antrian_pasien}
            no_rm={this.props.no_rm}
          />
        </div>
      </div>
    );
  }
}

export default DataAntrian;

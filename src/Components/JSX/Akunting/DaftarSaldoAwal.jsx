import React, { Component } from "react";
import DataCoa from "../../../JSON/dataCOA.json";
import "../../ASSETS/CSS/Akuntasi.css";
import MenuAkunting from "./MenuAkunting";

class DaftarSaldoAwal extends Component {
  daftarAkun() {
    return DataCoa.map((el, index) => (
      <div className="row1" key={index}>
        <div
          className="cell"
          style={
            el.keterangan === "0"
              ? { fontWeight: "bold" }
              : { paddingLeft: "45px" }
          }
        >
          {el.kode}-{el.no_akun}
        </div>
        <div
          className="cell"
          style={
            el.keterangan === "0"
              ? { fontWeight: "bold" }
              : { paddingLeft: "45px" }
          }
        >
          {el.nama_akun}
        </div>
        <div className="cell text-right">{el.saldo_awal}</div>
        <div className="cell text-right">{el.saldo_awal}</div>
        <div className="cell text-center">
          <button
            className="btn btn-success btn-sm"
            data-toggle="modal"
            data-target="#ubahSaldo"
          >
            Ubah
          </button>
        </div>
      </div>
    ));
  }

  render() {
    return (
      <div className="container-fluid">
        <MenuAkunting />
        <div
          className="card"
          style={{ borderTop: "2px solid #1976d2", width: "99%" }}
        >
          <div className="card-body">
            <div className="flex-container">
              <div className="box column1">
                <h2 className="card-title text-left">Saldo Awal</h2>
              </div>
            </div>
            <hr className="hr2" />
            <div className="row">
              <div className="col-md-12 rowsoap">
                <div className="table">
                  <div className="row1 header">
                    <div className="cell">No Akun</div>
                    <div className="cell">Nama Akun</div>
                    <div className="cell">Debit</div>
                    <div className="cell">Kredit</div>
                    <div className="cell">Aksi</div>
                  </div>
                  {this.daftarAkun()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DaftarSaldoAwal;

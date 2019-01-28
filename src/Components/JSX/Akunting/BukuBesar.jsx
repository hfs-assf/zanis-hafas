import React, { Component } from "react";
import DataCoa from "../../../JSON/dataCOA.json";
import CariAkun from "./CariAkun";
import MenuAkunting from "./MenuAkunting";
class BukuBesar extends Component {
  daftarAkun() {
    return DataCoa.map((el, index) => (
      <div className="row1" key={index}>
        <div className="cell text-center">09-01-2019</div>

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
        <div className="cell text-center">B001</div>
        <div className="cell text-right">Rp.0</div>
        <div className="cell text-right">Rp.0</div>
        <div className="cell text-right">Rp.0</div>
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
                <h2 className="card-title text-left">Buku Besar</h2>
              </div>
              <div className="box column2">
                <CariAkun />
              </div>
            </div>

            <hr className="hr2" />
            <div className="row justify-content-center">
              <h4>1-1000 Asset</h4>
            </div>
            <div className="row">
              <div className="col-md-12 rowsoap">
                <div className="table">
                  <div className="row1 header">
                    <div className="cell">Tanggal</div>
                    <div className="cell">Transaksi</div>
                    <div className="cell">Nomor Bukti</div>
                    <div className="cell">Debit</div>
                    <div className="cell">Kredit</div>
                    <div className="cell">Saldo</div>
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

export default BukuBesar;

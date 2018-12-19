import React, { Component } from "react";
// import Calender from "../../ASSETS/SVG/Kalender1";
// import ListCOA from "./ListCOA";
import DataCoa from "../../../JSON/dataCOA.json";
import MenuAkunting from "../MenuAkunting/MenuAkunting";

class ListAsuransi extends Component {
  daftarCOA() {
    return DataCoa.map((el, index) => (
      <div className="row1" key={index}>
        <div className="cell">{el.kode}</div>
        <div className="cell text-center">{el.nama_akun}</div>
        <div className="cell">{el.keterangan}</div>
        <div className="cell">
          <button className="btn btn-success btn-sm">Edit</button>
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
          style={{
            borderTop: "2px solid #1976d2",
            width: "99%"
          }}
        >
          <div className="card-body">
            <div className="flex-container">
              <div className="box column1">
                <h2 className="card-title text-left">List Asuransi</h2>
              </div>
            </div>
            <hr className="hr2" />
            <div className="listCOA">
              <button className="btn btn-success">Tambah Asuransi</button>
            </div>
            <div className="row">
              <div className="col-md-12 rowsoap">
                <div className="table">
                  <div className="row1 header">
                    <div className="cell">Kode</div>
                    <div className="cell">Nama Akun</div>
                    <div className="cell">Keterangan</div>

                    <div className="cell">Edit</div>
                  </div>
                  {this.daftarCOA()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ListAsuransi;

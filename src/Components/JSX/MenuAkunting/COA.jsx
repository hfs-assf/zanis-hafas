import React, { Component } from "react";
import Calender from "../../ASSETS/SVG/Kalender1";
import ListCOA from "./ListCOA";
import DataCoa from "../../../JSON/dataCOA.json";
import MenuAkunting from "../MenuAkunting/MenuAkunting";
class ChartOfAccount extends Component {
  daftarCOA() {
    return DataCoa.map((el, index) => (
      <div className="row1" key={index}>
        <div className="cell">{el.kode}</div>
        <div className="cell text-center">{el.nama_akun}</div>
        <div className="cell">{el.keterangan}</div>
        <div className="cell">{el.saldo_awal}</div>
        <div className="cell">{el.saldo_awal_p}</div>
        <div className="cell">{el.identitas}</div>
        <div className="cell">{el.layout}</div>
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
                <h2 className="card-title text-left">Chart Of Account (COA)</h2>
              </div>

              <div className="box column2">
                <div
                  class="input-group date"
                  style={{ width: "250px", right: "-250px" }}
                >
                  <input type="date" class="form-control" />

                  <div className="calender">
                    <Calender />
                  </div>
                  <hr />
                </div>
              </div>
            </div>
            <hr className="hr2" />
            <div className="listCOA">
              <ListCOA />
            </div>
            <div className="row">
              <div className="col-md-12 rowsoap">
                <div className="table">
                  <div className="row1 header">
                    <div className="cell">Kode</div>
                    <div className="cell">Nama Akun</div>
                    <div className="cell">Keterangan</div>
                    <div className="cell">Saldo Awal Baru</div>
                    <div className="cell">Saldo Awal Penutupan</div>
                    <div className="cell">Identasi</div>
                    <div className="cell">Layout Laporan</div>
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

export default ChartOfAccount;

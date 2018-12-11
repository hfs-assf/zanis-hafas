import React, { Component } from "react";
import "../../ASSETS/CSS/Akuntasi.css";
import Calender from "../../ASSETS/SVG/Kalender1";
import MenuAkunting from "../MenuAkunting/MenuAkunting";
class JurnalUmum extends Component {
  render() {
    return (
      <div className="container-fluid">
        <MenuAkunting />
        <div
          className="card"
          style={{ borderTop: "2px solid #1976d2", width: "98%" }}
        >
          <div className="card-body">
            <div className="flex-container">
              <div className="box column1">
                <h2 className="card-title text-left">Jurnal Umum </h2>
              </div>

              <div className="box column2" />
            </div>
            <hr className="hr2" />
            <div className="row">
              <div className="col-md-3">
                Untuk periode yang berakhir tanggal :
                <div class="input-group date">
                  <input
                    type="date"
                    class="form-control"
                    style={{ borderRadius: "5px" }}
                  />

                  <div className="calender">
                    <Calender />
                  </div>
                  <hr />
                </div>
              </div>
              <div
                className="col-md-4 card"
                style={{ backgroundColor: "#1976d2" }}
              >
                <h3 style={{ color: "white", textAlign: "center" }}>
                  Jumlah Debit
                </h3>
                <hr className="hrdeb" />
                <div className="debit">Rp. 2000000</div>
              </div>
              <div
                className="col-md-4 card ml-4"
                style={{ backgroundColor: "#2076dd" }}
              >
                <h3 style={{ color: "white", textAlign: "center" }}>
                  Jumlah Kredit
                </h3>
                <hr className="hrdeb" />
                <div className="debit">Rp. 2000000</div>
              </div>
            </div>
            <hr className="hrtable" />

            <div className="row">
              <div className="col-md-11 rowsoap">
                <div className="table">
                  <div className="row1 header">
                    <div className="cell">Tanggal</div>
                    <div className="cell">Transaksi</div>
                    <div className="cell">No Bukti</div>
                    <div className="cell">Jumlah</div>
                    <div className="cell">Debit</div>
                    <div className="cell">Kredit</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default JurnalUmum;

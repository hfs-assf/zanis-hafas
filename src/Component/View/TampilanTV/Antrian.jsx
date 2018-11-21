import React, { Component } from "react";
import Antrian from "../../../JSON/antrianPasien.json";
import "../../CSS/tampilantv.css";

class TampilanTV extends Component {
  renderTimelinePelayananMedis() {
    return Antrian.map((item, index) => (
      <li key={index} className="animated bounceIn">
        <span />
        <div className="number"> {item.id} </div>
        <div>
          <div className="title">{item.no_rm}</div>
          <div className="tefalsext-white">{item.nama}</div>
          <div className="type">
            {item.asuransi} - {item.tujuan}
          </div>
        </div>
        <span className="number">
          <span>{item.jam_masuk}</span>
          <span />
        </span>
      </li>
    ));
  }

  render() {
    return (
      <div className="container-fluid televisi">
        <div className="row ">
          <div className="col-md-3">
            <div className="ruqyah">Poli Ruqyah </div>
            <div className="container object">
              <ul style={{ zIndex: "-1" }}>
                {this.renderTimelinePelayananMedis()}
              </ul>
            </div>
          </div>
          <div className="col-md-4 antrianselanjutnya">
            <div
              className="card text-white mb-2 bg-primary"
              style={{ maxWidth: "18rem" }}
            >
              <div className="card-header">ANTRIAN RUQYAH</div>
              <div className="card-body">
                <h3 className="text-center">NOMOR SELANJUTNYA</h3>
                <hr />
                <h1 className="text-center">30</h1>
              </div>
            </div>
            <div
              className="card text-white bg-success"
              style={{ maxWidth: "18rem" }}
            >
              <div className="card-header">ANTRIAN BEKAM</div>
              <div className="card-body">
                <h3 className="text-center">NOMOR SELANJUTNYA</h3>
                <hr />

                <h1 className="text-center">20 </h1>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="bekam">Poli Bekam </div>
            <div className="container object1">
              <ul style={{ zIndex: "-1" }}>
                {this.renderTimelinePelayananMedis()}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TampilanTV;

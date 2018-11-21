import React, { Component } from "react";
import { Link } from "react-router-dom";
import antrian from "../../../JSON/antrianPasien.json";
import pasien from "../../../JSON/pasien.json";
import "../../ASSETS/CSS/Timeline.css";

class TimelineKasir extends Component {
  render() {
    let deskripsiPasien, ket;
    deskripsiPasien = antrian.map(e => {
      ket = pasien.find(pasien => pasien.no_rm === e.no_rm);

      return (
        <li key={e.id} className="animated bounceIn">
          <span />
          <Link to={"/form-pembayaran/" + e.id}>
            <div className="number"> {e.id} </div>
            <div>
              <div className="title">{e.no_rm}</div>
              <div className="tefalsext-white">{ket.nama}</div>
              <div className="type">
                {e.asuransi} - {e.tujuan}
              </div>
            </div>
          </Link>
          <span className="number">
            <span>{e.jam_masuk}</span>
            <span />
          </span>
        </li>
      );
    });

    return (
      <div className="row">
        <div className="col-md-4">
          <div className="container">
            <ul>{deskripsiPasien}</ul>
          </div>
        </div>
      </div>
    );
  }
}

export default TimelineKasir;

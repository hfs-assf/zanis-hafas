import React, { Component } from "react";
import { Link } from "react-router-dom";
import antrian from "../../../JSON/antrianPasien.json";
import pasien from "../../../JSON/pasien.json";
import "../../ASSETS/CSS/Timeline.css";
import Calender from "../../../Components/ASSETS/SVG/Kalender1";

class TimelinePelayananMedis extends Component {
  render() {
    let deskripsiPasien, ket;

    deskripsiPasien = antrian.map(e => {
      ket = pasien.find(pasien => pasien.no_rm === e.no_rm);

      return (
        <li key={e.id} className="animated bounceIn">
          <Link to={"/pelayanan-medis/" + e.id}>
            <span />
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
        <div className="col-md-7">
          <div className="container">
            <ul>{deskripsiPasien}</ul>
          </div>
        </div>
        <div className="col-md-4 tglpasien">
          <div className="form-group" style={{ width: "250px" }}>
            <span>Silahkan Pilih Tanggal :</span>
            <div className="input-group date">
              <input
                type="date"
                className="form-control"
                style={{ borderRadius: "5px" }}
              />

              <div className="calender">
                <Calender />
              </div>
              <hr />
            </div>
          </div>
          <div className="banyakpasien">
            <span className="badge">Jumlah Antrian : 8</span>
          </div>
        </div>
      </div>
    );
  }
}

export default TimelinePelayananMedis;

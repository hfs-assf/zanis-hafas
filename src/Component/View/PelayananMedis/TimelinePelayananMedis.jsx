import React, { Component } from "react";
import Antrian from "../../../JSON/antrianPasien.json";
import { Link } from "react-router-dom";
import "../../CSS/Timeline.css";

class TimelinePelayananMedis extends Component {
  renderTimelinePelayananMedis() {
    return Antrian.map((item, index) => (
      <li key={index} className="animated bounceIn">
        <Link to={"/formpelayananmedis/" + item.id}>
          <span />
          <div className="number"> {item.id} </div>
          <div>
            <div className="title">{item.no_rm}</div>
            <div className="tefalsext-white">{item.nama}</div>
            <div className="type">
              {item.asuransi} - {item.tujuan}
            </div>
          </div>
        </Link>
        <span className="number">
          <span>{item.jam_masuk}</span>
          <span />
        </span>
      </li>
    ));
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-4">
          <div className="container">
            <ul>{this.renderTimelinePelayananMedis()}</ul>
          </div>
        </div>
      </div>
    );
  }
}

export default TimelinePelayananMedis;

import React, { Component } from "react";
import DataTimeline from "../../../JSON/pasien.json";
import { Link } from "react-router-dom";
import "../../CSS/Timeline.css";

class TimelineKasir extends Component {
  renderTimelineKasir() {
    return DataTimeline.map((item, index) => (
      <li key={index} className="animated bounceIn">
        <Link to="/form-pembayaran">
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
            <ul>{this.renderTimelineKasir()}</ul>
          </div>
        </div>
      </div>
    );
  }
}

export default TimelineKasir;

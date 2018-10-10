import React, { Component } from "react";
import DataTimeline from "../../../JSON/pasien.json";

class TimelineApotek extends Component {
  renderTimelineApotek() {
    return DataTimeline.map((item, index) => (
      <li key={index}>
        <span />
        <div className="number"> {item.id} </div>
        <div>
          <div className="title">{item.no_rm}</div>
          <div className="text-white">{item.nama}</div>
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
      <div className="container">
        <ul>{this.renderTimelineApotek()}</ul>
      </div>
    );
  }
}

export default TimelineApotek;

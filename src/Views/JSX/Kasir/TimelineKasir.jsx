import React, { Component } from "react";
import Timeline from "../../../Components/JSX/Kasir/TimelineKasir";

class TimelineKasir extends Component {
  render() {
    return (
      <div className="container-timeline">
        <div className="item-timeline">
          <Timeline />
        </div>
      </div>
    );
  }
}

export default TimelineKasir;

import React, { Component } from "react";
import Timeline from "../../../Components/JSX/Kasir/TimelineKasir";
import FormBeli from "../../../Components/JSX/Kasir/FormBeli";

class TimelineKasir extends Component {
  render() {
    return (
      <div className="container-timeline">
        <div className="item-timeline">
          <Timeline />
        </div>
        <div className="item-timeline-left">
          <FormBeli />
        </div>
      </div>
    );
  }
}

export default TimelineKasir;

import React, { Component } from "react";
import Timeline from "../../../Components/JSX/Kasir/TimelineKasir";

class TimelineKasir extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div>
          <button
            type="button"
            className="close"
            data-dismiss="alert"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <Timeline />
      </div>
    );
  }
}

export default TimelineKasir;

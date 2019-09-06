import React, { Component } from "react";
import Timeline from "../../../Components/JSX/PelayananMedis/TimelinePelayananMedis";

class TimelinePelayananMedis extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div
          className="alert alert-danger alert-dismissible fade show"
          role="alert"
        >
          <strong>Antrian Pelayanan Medis</strong>

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

export default TimelinePelayananMedis;

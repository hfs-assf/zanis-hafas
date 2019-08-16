import React, { Component } from "react";
import Timeline from "../../../Components/JSX/PelayananMedis/TimelineTerapis";

export class antrianTerapis extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div
          className="alert alert-danger alert-dismissible fade show"
          role="alert"
        >
          <strong>List Antrian Terapis.</strong>
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

export default antrianTerapis;

import React, { Component } from "react";
import TimelineKasir from "../../View/Kasir/TimelineKasir";

class Apotek extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div
          className="alert alert-danger alert-dismissible fade show"
          role="alert"
        >
          <strong>Lakukan metode FIFO pada Timeline : </strong> Arahkan kursor
          untuk melanjutkan perintah
          <button
            type="button"
            className="close"
            data-dismiss="alert"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <TimelineKasir />
      </div>
    );
  }
}

export default Apotek;

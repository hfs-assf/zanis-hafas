import React, { Component } from "react";
import "../../CSS/Apotek.css";
import TimelineAPotek from "../../View/Apotek/TimelineApotek";

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
        <div className="row">
          <div className="col-md-2">
            <TimelineAPotek />
          </div>
        </div>
      </div>
    );
  }
}

export default Apotek;

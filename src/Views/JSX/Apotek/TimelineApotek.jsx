import React, { Component } from "react";
import FormBeli from "../../../Components/JSX/Kasir/FormBeli";
import TimelinePelayananApotik from "../../../Components/JSX/Apotek/TimelinePelayananApotik";

class Apotek extends Component {
  render() {
    return (
      <div className="container-timeline">
        {/* <div
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
        </div> */}
        <div className="item-timeline">
          <TimelinePelayananApotik />
        </div>
        <div className="item-timeline-left">
          <FormBeli />
        </div>
      </div>
    );
  }
}

export default Apotek;

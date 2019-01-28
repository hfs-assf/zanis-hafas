import React, { Component } from "react";
import Sukses from "./Sukses";
import Gagal from "./Gagal";
class ModalKonfirmasi extends Component {
  render() {
    console.log(this.props.notification);
    return (
      <div
        className="modal fade bd-example-modal-sm"
        id="notification"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="mySmallModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-sm ">
          <div className="modal-content">
            {this.props.notification === "1" ? <Sukses /> : <Gagal />}
          </div>
        </div>
      </div>
    );
  }
}

export default ModalKonfirmasi;

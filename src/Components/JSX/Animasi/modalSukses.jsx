import React, { Component } from "react";
import Sukses from "./Sukses";
class modalSukses extends Component {
  render() {
    return (
      <div
        className="modal fade"
        id="notification"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="notification"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-right" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <Sukses />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default modalSukses;

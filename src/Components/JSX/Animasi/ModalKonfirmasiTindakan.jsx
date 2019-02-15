import React, { Component } from "react";
import SVGQuestion from "../../ASSETS/SVG/SVGQuestion";

class ModalKonfirmasiTindakan extends Component {
  render() {
    return (
      <div
        className="modal fade bd-example-modal-sm"
        id={this.props.modal}
        tabIndex="-1"
        role="dialog"
        aria-labelledby="mySmallModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-sm ">
          <div className="modal-content ">
            <div className="modal-body justify-content-center">
              <div className="row">
                <div className="col-md-3">
                  <SVGQuestion />
                </div>
                <div className="col-md-9">
                  <p className="success">Apakah anda yakin untuk menyimpan?</p>
                </div>
              </div>
            </div>
            <div className="modal-footer justify-content-center">
              <button
                className="btn btn-info col-md-6"
                onClick={this.props.passValue}
                data-dismiss="modal"
                data-toggle="modal"
                data-target="#notification"
              >
                Ya
              </button>
              <button
                className="btn btn-outline-info col-md-6"
                data-dismiss="modal"
              >
                Tidak
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ModalKonfirmasiTindakan;

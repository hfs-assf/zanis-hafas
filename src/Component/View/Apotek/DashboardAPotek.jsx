import React, { Component } from "react";
import SVGapotek from "../../svgfile/svgapotek";
import "../../CSS/DashboardApotek.css";

class DashboardApotek extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-4 ">
          <div className="card card-inverse info-color">
            <div className="card-body" style={{ maxHeight: "140px" }}>
              <div className="d-flex">
                <div className="col-sm-3">
                  <SVGapotek />
                </div>
                <div className="col-sm-9">
                  <h4 className="text-white">Daftar Obat</h4>
                  <h2 className="font-light text-white">1400</h2>
                </div>
              </div>
            </div>
            <div className="card-footer">
              <button
                className="btn btn-info btn-sm waves-effect waves-light"
                type="button"
                data-toggle="modal"
                data-target="#addmedicine"
              >
                Tambah Obat
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card card-inverse danger-color">
            <div className="card-body" style={{ maxHeight: "140px" }}>
              <div className="d-flex">
                <div className="col-sm-3">
                  <SVGapotek />
                </div>
                <div className="col-sm-9">
                  <h4 className="text-white">Obat yang akan expired</h4>
                  <h6 className="text-white">Oktober 2018</h6>
                  <h2 className="font-light text-white">1400</h2>
                </div>
              </div>
            </div>
            <div className="card-footer">
              <button
                className="btn btn-danger btn-sm"
                data-toggle="modal"
                data-target="#expDetail"
              >
                Detail
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card card-inverse info-color">
            <div className="card-body" style={{ maxHeight: "140px" }}>
              <div className="d-flex">
                <div className="col-sm-3">
                  <SVGapotek />
                </div>
                <div className="col-sm-9">
                  <h4 className="text-white">Persediaan obat yang menipis</h4>
                  <h2 className="font-light text-white">1400</h2>
                </div>
              </div>
            </div>
            <div className="card-footer">
              <button
                className="btn btn-info btn-sm"
                data-toggle="modal"
                data-target="#minStockDetail"
              >
                Detail
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DashboardApotek;

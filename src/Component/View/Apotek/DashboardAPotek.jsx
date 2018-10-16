import React, { Component } from "react";
import SVGapotek from "../../svgfile/svgapotek";

class DashboardApotek extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-lg-4 col-md-12">
          <div className="card card-inverse info-color">
            <div className="card-body">
              <div className="d-flex">
                <div className="svg">
                  <SVGapotek />
                </div>

                <div>
                  <h3 className="text-white">Jumlah Obat</h3>
                  <h6 className="text-white">Oktober 2018</h6>{" "}
                </div>
              </div>
              <div className="row">
                <div className="col-12 p-t-10 p-b-20 align-self-center">
                  <h2 className="font-light text-white">1400</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-12">
          <div className="card  red lighten-1">
            <div className="card-body">
              <div className="d-flex">
                <div className="svg">
                  <SVGapotek />
                </div>

                <div>
                  <h3 className="text-white">Obat Yang Akan Expired</h3>
                  <h6 className="text-white">Oktober 2018</h6>{" "}
                </div>
              </div>
              <div className="row">
                <div className="col-12 p-t-10 p-b-20 align-self-center">
                  <h2 className="font-light text-white">20</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-12">
          <div className="card mdb-color lighten-2">
            <div className="card-body">
              <div className="d-flex">
                <div className="svg">
                  <SVGapotek />
                </div>

                <div>
                  <h3 className="text-white">Total Pemasukan Obat</h3>
                  <h6 className="text-white">Oktober 2018</h6>{" "}
                </div>
              </div>
              <div className="row">
                <div className="col-12 p-t-10 p-b-20 align-self-center">
                  <h2 className="font-light text-white">Rp. 1800</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DashboardApotek;

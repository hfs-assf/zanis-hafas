import React, { Component } from "react";
import SVGapotek from "../../svgfile/svgapotek";

class DashboardApotek extends Component {
  render() {
    return (
      <div class="row">
        <div class="col-lg-4 col-md-12">
          <div class="card card-inverse info-color">
            <div class="card-body">
              <div class="d-flex">
                <div className="svg">
                  <SVGapotek />
                </div>

                <div>
                  <h3 class="text-white">Jumlah Obat</h3>
                  <h6 class="text-white">Oktober 2018</h6>{" "}
                </div>
              </div>
              <div class="row">
                <div class="col-12 p-t-10 p-b-20 align-self-center">
                  <h2 class="font-light text-white">1400</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-12">
          <div class="card  red lighten-1">
            <div class="card-body">
              <div class="d-flex">
                <div className="svg">
                  <SVGapotek />
                </div>

                <div>
                  <h3 class="text-white">Total Obat Yang Akan Expired</h3>
                  <h6 class="text-white">Oktober 2018</h6>{" "}
                </div>
              </div>
              <div class="row">
                <div class="col-12 p-t-10 p-b-20 align-self-center">
                  <h2 class="font-light text-white">20</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-12">
          <div class="card mdb-color lighten-2">
            <div class="card-body">
              <div class="d-flex">
                <div className="svg">
                  <SVGapotek />
                </div>

                <div>
                  <h3 class="text-white">Total Pemasukan Obat</h3>
                  <h6 class="text-white">Oktober 2018</h6>{" "}
                </div>
              </div>
              <div class="row">
                <div class="col-12 p-t-10 p-b-20 align-self-center">
                  <h2 class="font-light text-white">Rp. 1800</h2>
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

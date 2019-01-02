import React, { Component } from "react";
import "../../ASSETS/CSS/form.css";
import SVGSuratSakit from "../../ASSETS/SVG/SVGSuratSakit";
import DetailPasien from "../DetailPasien";
import SuratSakit from "./FormSuratSakit";

class PendaftaranPelayananMedis extends Component {
  render() {
    return (
      <div className="row justify-content-center" style={{ margin: "0.5em" }}>
        <div className="col-md-8 boxriwayat">
          <DetailPasien id={this.props.pasien} />
        </div>
        <div className="col-md-4">
          <div className="row">
            <div className="boxsurat">
              <SVGSuratSakit />
              <h5 className="h5-responsive"> Surat Rujukan</h5>
            </div>
            <div
              className="boxsurat"
              data-toggle="modal"
              data-target="#sickleaveletter"
            >
              <SVGSuratSakit />

              <h5 className="h5-responsive"> Surat Sakit</h5>
            </div>
            <SuratSakit id={this.props.pasien} />
          </div>
        </div>
      </div>
    );
  }
}

export default PendaftaranPelayananMedis;

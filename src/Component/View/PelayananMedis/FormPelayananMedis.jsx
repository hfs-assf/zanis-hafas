import React, { Component } from "react";
import "../../CSS/form.css";
import SVGSuratSakit from "../../svgfile/SVGSuratSakit";
import TabulasiPelayananMedis from "./Tabulasi";
import pasienList from "../../../JSON/pasien";
class PendaftaranPelayananMedis extends Component {
  state = {
    id: this.props.pasien
  };
  renderPasien(id) {
    return (
      <table>
        <tbody>
          <tr>
            <td>Nomor RM </td>
            <td className="datatable">
              :&ensp;
              {pasienList[id].no_rm}
            </td>
          </tr>
          <tr>
            <td>Nama</td>
            <td className="datatable">
              :&ensp;
              {pasienList[id].nama}
            </td>
          </tr>
          <tr>
            <td>Poli</td>
            <td className="datatable">
              :&ensp;
              {pasienList[id].tujuan}
            </td>
          </tr>
          <tr>
            <td>Tanggal</td>
            <td className="datatable">:&ensp;10 Oktober 1993</td>
          </tr>
        </tbody>
      </table>
    );
  }

  render() {
    return (
      <div className="container-fluid ">
        <div className="row justify-content-center" style={{ margin: "0.5em" }}>
          <div className="col-md-8 boxriwayat">
            {this.renderPasien(this.state.id - 1)}
          </div>
          <div className="col-md-4">
            <div className="row">
              <div className="boxsurat">
                <SVGSuratSakit />
                <h5 className="h5-responsive"> Surat Rujukan</h5>
              </div>
              <div className="boxsurat">
                <SVGSuratSakit />
                <h5 className="h5-responsive"> Surat Sakit</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="flexpelayanan">
          <div className="boxpelayanan">
            <TabulasiPelayananMedis />
          </div>
        </div>
        <div className="modal-footer justify-content-center">
          <button className="btn btn-primary">Selesai</button>
        </div>
      </div>
    );
  }
}

export default PendaftaranPelayananMedis;

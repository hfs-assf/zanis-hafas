import React, { Component } from "react";
import "../../CSS/form.css";
import SVGSuratSakit from "../../svgfile/SVGSuratSakit";
import TabulasiPelayananMedis from "./Tabulasi";
import pasienList from "../../../JSON/pasien";

class PendaftaranPelayananMedis extends Component {
  render() {
    let deskripsiPasien;
    const pasien = pasienList.filter(antrian => {
      return antrian.id.toString().indexOf(this.props.pasien) !== -1;
    });
    if (pasien.length !== 0) {
      deskripsiPasien = pasien.map(pasien => {
        return (
          <table key={pasien.id}>
            <tbody>
              <tr>
                <td>Nomor RM </td>
                <td className="datatable">
                  :&ensp;
                  {pasien.no_rm}
                </td>
              </tr>
              <tr>
                <td>Nama</td>
                <td className="datatable">
                  :&ensp;
                  {pasien.nama}
                </td>
              </tr>
              <tr>
                <td>Poli</td>
                <td className="datatable">
                  :&ensp;
                  {pasien.tujuan}
                </td>
              </tr>
              <tr>
                <td>Tanggal</td>
                <td className="datatable">:&ensp;10 Oktober 1993</td>
              </tr>
            </tbody>
          </table>
        );
      });
    }
    return (
      <div className="container-fluid ">
        <div className="row justify-content-center" style={{ margin: "0.5em" }}>
          <div className="col-md-8 boxriwayat">{deskripsiPasien}</div>
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

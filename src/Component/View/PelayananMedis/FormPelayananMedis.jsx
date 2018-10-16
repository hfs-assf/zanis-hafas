import React, { Component } from "react";
import "../../CSS/formpelayananmedis.css";
import SVGSuratSakit from "../../svgfile/SVGSuratSakit";
import TabulasiPelayananMedis from "./Tabulasi";

class PendaftaranPelayananMedis extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="flexpelayanan">
          <div className="boxriwayat">
            <table>
              <tbody>
                <tr>
                  <td>Nomor RM</td>
                  <td className="datatable">:&ensp;10390193019</td>
                </tr>
                <tr>
                  <td>Nama</td>
                  <td className="datatable">:&ensp;Kurnianto Syaputra</td>
                </tr>
                <tr>
                  <td>Poli</td>
                  <td className="datatable">:&ensp;Poli Mata</td>
                </tr>
                <tr>
                  <td>Tanggal</td>
                  <td className="datatable">:&ensp;10 Oktober 1993</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="boxsurat">
            <SVGSuratSakit />
            <h5 className="h5-responsive"> Surat Rujukan</h5>
          </div>
          <div className="boxsurat1">
            <SVGSuratSakit />
            <h5> Surat Sakit</h5>
          </div>
          <div className="boxpelayanan">
            <TabulasiPelayananMedis />
          </div>
        </div>
        <button className="btn btn-info btn-md">Selesai</button>
      </div>
    );
  }
}

export default PendaftaranPelayananMedis;

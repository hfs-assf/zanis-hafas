import React, { Component } from "react";
import jsPDF from "jspdf";
import antrian from "../../../JSON/antrianPasien.json";
import pasien from "../../../JSON/pasien.json";
import "../../ASSETS/CSS/Timeline.css";
import "../../ASSETS/CSS/form.css";
// import SVGPrinter from "../../ASSETS/SVG/Printer";

class TimelineApotek extends Component {
  arrayTimeline = antrian.map(item => item.id);
  constructor() {
    super();
    this.state = { showMe: false, id: "0" };
  }

  showHide(value, id) {
    this.setState({
      showMe: value,
      id: id
    });
  }

  cetak(pasien) {
    var doc = new jsPDF({
      orientation: "landscape",
      unit: "cm",
      format: [6, 3],
      margin: [1, 1, 1, 1]
    });

    doc.setFontSize(8);
    doc.text("Kurnianto Syaputra, Tn", 1, 1);
    doc.text("3x1 sehabis makan", 1, 2);
    doc.save(pasien + ".pdf");
  }

  render() {
    let deskripsiPasien, ket;
    deskripsiPasien = antrian.map(e => {
      ket = pasien.find(pasien => pasien.no_rm === e.no_rm);

      return (
        <li
          key={e.id}
          className="animated bounceIn"
          onClick={() => this.showHide(true, e.id)}
        >
          <span />

          <div className="number"> {e.id} </div>
          <div>
            <div className="title">{e.no_rm}</div>
            <div className="tefalsext-white">{ket.nama}</div>
            <div className="type">
              {e.asuransi} - {e.tujuan}
            </div>
          </div>

          <span className="number">
            <span>{e.jam_masuk}</span>
            <span />
          </span>
        </li>
      );
    });
    return (
      <div className="row">
        <div className="col-md-4">
          <div className="container">
            <ul>{deskripsiPasien}</ul>
          </div>
        </div>

        {this.state.showMe ? (
          <div className="col-md-8">
            <div className="container animated bounceInDown">
              <fieldset>
                <div className="header-resep">
                  <button
                    type="button"
                    className="close"
                    onClick={() => this.showHide(false)}
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                  <div className="col-md-12 rowsoap">
                    <div className="legendtitle1">Resep Obat</div>
                    <div className="table">
                      <div className="row1 header">
                        <div className="cell">Nama Obat </div>
                        <div className="cell">Jumlah </div>
                        <div className="cell">Keterangan </div>
                      </div>
                      <div className="row1">
                        <div className="cell">Abbocath</div>
                        <div className="cell">3</div>
                        <div className="cell">3x1 sehari</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal-footer justify-content-center">
                  <button
                    className="btn btn-primary"
                    onClick={() => this.cetak("Kurnianto Syaputra, Tn")}
                  >
                    {/* <SVGPrinter /> */} Cetak e-Tiket
                  </button>
                  <button className="btn btn-primary">Selesai</button>
                </div>
              </fieldset>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default TimelineApotek;

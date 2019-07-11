import React, { Component } from "react";
import "../../../ASSETS/CSS/RiwayatPasien.css";
import listHistoriMedis from "../../../../Methods/RekamMedis/HistorisMedis/listHistoriMedis";
import detailPasien from "../../../../Methods/RekamMedis/Pasien/detailPasien";

class RiwayatKunjungan extends Component {
  constructor() {
    super();
    this.state = {
      histori: []
    };
  }

  componentDidMount = () => {
    listHistoriMedis(this.props.id);

    listHistoriMedis(this.props.id).then(({ data }) => {
      this.setState({
        histori: data
      });
    });
  };

  renderHistoriMedis = rm => {
    return (
      <div className="list-item col-md-12" key={rm.uid}>
        <div className="list-content">
          <div className="judulatas">
            <strong>
              {new Date(rm.waktu_checkup).toLocaleDateString("en-GB")}
            </strong>
          </div>
          <ul>
            <li>{rm.penjamin}</li>
            <li>{rm.diagnosa}</li>
            <li>{rm.jenis_perawatan}</li>
          </ul>
        </div>
      </div>
    );
  };

  render() {
    let header;
    const { histori } = this.state;
    console.log("histori", histori);

    if (histori.length !== 0) {
      header = histori.map(rm => {
        return this.renderHistoriMedis(rm);
      });
    } else {
      header = (
        <div className="row1">
          <div className="cell">Belum ada histori medis.</div>
        </div>
      );
    }

    return (
      <div className="card" style={{ borderTop: "2px solid #1976d2" }}>
        <div className="card-body">
          <div className="row">
            <div className="col-md-12 rowsoap">{header}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default RiwayatKunjungan;

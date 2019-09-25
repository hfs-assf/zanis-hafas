import React, { Component } from "react";
import "../../../ASSETS/CSS/RiwayatPasien.css";
import listHistoriMedis from "../../../../Methods/RekamMedis/HistorisMedis/listHistoriMedis";

class RiwayatRM extends Component {
  constructor() {
    super();
    this.state = {
      histori: []
    };
  }

  componentDidMount = () => {
    listHistoriMedis(this.props.pasien).then(({ data }) => {
      this.setState({
        histori: data
      });
    });
  };

  renderTable = value => {
    const { histori } = this.state;
    // const filterData = listDaftar.filter(el => el.id_lokasi === value);

    // console.log("filter", filterData);
    return histori.map(e => (
      <tr key={e.uid}>
        <td>{new Date(e.waktu_checkup).toLocaleDateString("en-GB")}</td>
        <td>{e.subjektif}</td>
        <td>{e.objektif}</td>
        <td>{e.analisa}</td>
        <td>{e.tindakan}</td>
        <td>{e.diagnosa}</td>
        <td>{e.catatan}</td>
      </tr>
    ));
  };

  render() {
    return (
      <div className="card">
        <div className="card-body">
          <table className="table">
            <thead style={{ background: "#25a9dd" }}>
              <tr>
                <th style={{ textAlign: "center" }}>tanggal</th>
                <th style={{ textAlign: "center" }}>subjektif</th>
                <th style={{ textAlign: "center" }}>Objektif</th>
                <th style={{ textAlign: "center" }}>Assesment</th>
                <th style={{ textAlign: "center" }}>Planning</th>
                <th style={{ textAlign: "center" }}>Diagnosa</th>
                <th style={{ textAlign: "center" }}>Catatan</th>
              </tr>
            </thead>
            <tbody>{this.renderTable()}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default RiwayatRM;

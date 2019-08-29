import React, { Component } from "react";
import "../../ASSETS/CSS/Timeline.css";
import listTerapis from "../../../Methods/RekamMedis/HistorisMedis/listTerapis";
import "../../ASSETS/CSS/form.css";
import { Consumer } from "../../../Methods/User/Auth/Store";

export class TimelineTerapis extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listDaftar: []
    };
  }

  componentDidMount = () => {
    listTerapis().then(({ data }) => {
      this.setState({
        listDaftar: data
      });
    });
  };

  renderTable = value => {
    const { listDaftar } = this.state;
    // const filterData = listDaftar.filter(el => el.id_lokasi === value);
    return listDaftar.map(e => {
      return (
        <tr key={e.uid}>
          <td>{new Date(e.waktu_checkup).toLocaleDateString("en-GB")}</td>
          <td>{e.nama_terapis}</td>
          <td>{e.subjektif}</td>
          <td>{e.objektif}</td>
          <td>{e.analisa}</td>
          <td>{e.tindakan}</td>
          <td>{e.diagnosa}</td>
        </tr>
      );
    });
  };

  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>tanggal</th>
              <th>Nama Terapis</th>
              <th>subjektif</th>
              <th>Objektif</th>
              <th>Analisa</th>
              <th>Tindakan</th>
              <th>Diagnosa</th>
            </tr>
          </thead>
          <tbody>{this.renderTable()}</tbody>
        </table>
      </div>
    );
  }
}

export default TimelineTerapis;

import React, { Component } from "react";
import "../../ASSETS/CSS/Timeline.css";
import * as waktu from "../../../Methods/waktu";
import listTerapis from "../../../Methods/RekamMedis/HistorisMedis/listTerapis";
import "../../ASSETS/CSS/form.css";
import { Consumer } from "../../../Methods/User/Auth/Store";

export class TimelineTerapis extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listDaftar: [],
      filterTanggal: waktu.dateFormat()
    };
  }

  componentDidMount = () => {
    listTerapis(this.state.filterTanggal).then(({ data }) => {
      this.setState({
        listDaftar: data
      });
    });
    // .catch(err => console.log(err));
  };

  renderTable = value => {
    const { listDaftar } = this.state;
    const filterData = listDaftar.filter(el => el.id_lokasi === value);
    return filterData.map(e => {
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
          <Consumer>
            {({ state }) => {
              return (
                <tbody>{this.renderTable(state.dataLogin.id_lokasi)}</tbody>
              );
            }}
          </Consumer>
        </table>
      </div>
    );
  }
}

export default TimelineTerapis;

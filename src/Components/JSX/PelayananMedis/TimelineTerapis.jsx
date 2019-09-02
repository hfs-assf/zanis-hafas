import React, { Component } from "react";
import "../../ASSETS/CSS/Timeline.css";
import listTerapis from "../../../Methods/RekamMedis/HistorisMedis/listTerapis";
import "../../ASSETS/CSS/form.css";

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

  // getData = async () => {
  //   let antrian = await listTerapis().then(data => data.data);
  //   let namaList = [];

  //   const listRM = antrian.map(el => el.nomor_rekam_medis);
  //   for (let i = 0; i < listRM.length; i++) {
  //     let nama = await detailPasien(listRM[i]).then(data => data.data);
  //     namaList.push(nama[0].nama_pasien);
  //   }

  //   return antrian.map((el, i) => ({ ...el, nama: namaList[i] }));
  // };

  renderTable = () => {
    const { listDaftar } = this.state;
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
    console.log("miaww", this.state.listDaftar);
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

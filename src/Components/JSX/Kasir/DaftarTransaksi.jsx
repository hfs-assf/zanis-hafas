import React, { Component } from "react";
import daftarTransaksi from "../../../Methods/Kasir/Transaksi/daftarTransaksi";
import { dateFormat } from "../../../Methods/waktu";

export class DaftarTransaksi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listDaftar: [],
      tanggal: Date.now("mm/dd/YYYY")
    };
  }

  componentDidMount = () => {
    let tanggal = new Date();
    let date = tanggal.getDate();
    let month = tanggal.getMonth();
    let year = tanggal.getFullYear();
    let tanggalSekarang = year + "-" + (month + 1) + "-" + date;
    console.log(tanggalSekarang);
    daftarTransaksi(tanggalSekarang)
      // .then(data => console.log("ini daftar nya", data))
      .then(({ data }) => {
        this.setState({
          listDaftar: data
        });
      });
  };

  details = () => {
    return this.state.listDaftar.map(e => (
      <tr key={e.uid}>
        <td>{new Date(e.waktu_transaksi).toLocaleDateString("en-GB")}</td>
        <td>{dateFormat(e.waktu_transaksi)}</td>
        <td>{e.total_biaya}</td>
        <td>{e.nik_kasir}</td>
      </tr>
    ));
  };

  render() {
    let header;
    header = (
      <table className="table">
        <thead>
          <tr>
            <th>tanggal transaksi</th>
            <th>waktu transaksi</th>
            <th>total biaya</th>
            <th>dicatat oleh</th>
          </tr>
        </thead>
        <tbody>{this.details()}</tbody>
      </table>
    );
    return <div className="boxpelayanan">{header}</div>;
  }
}

export default DaftarTransaksi;

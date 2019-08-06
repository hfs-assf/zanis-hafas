import React, { Component } from "react";
import daftarTransaksi from "../../../Methods/Kasir/Transaksi/daftarTransaksi";

import * as waktu from "../../../Methods/waktu";
import "../../ASSETS/CSS/form.css";

export class DaftarTransaksi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listDaftar: [],
      filterTanggal: waktu.dateFormat()
    };
  }

  gantiTanggal = e => {
    this.setState({
      filterTanggal: e.target.value
    });

    daftarTransaksi(this.state.filterTanggal).then(({ data }) => {
      this.setState({
        listDaftar: data
      });
    });
  };

  renderTable = () => (
    <table className="table">
      <thead>
        <tr>
          <th>tanggal transaksi</th>
          <th>waktu transaksi</th>
          <th>total biaya</th>
          <th>dicatat oleh</th>
        </tr>
      </thead>
      {this.state.listDaftar.map(
        ({ uid, waktu_transaksi, total_biaya, nik_kasir }) => (
          <tr key={uid}>
            <td>{new Date(waktu_transaksi).toLocaleDateString("en-GB")}</td>
            <td>{waktu.timeFormat(waktu_transaksi)}</td>
            <td>{total_biaya}</td>
            <td>{nik_kasir}</td>
          </tr>
        )
      )}
    </table>
  );

  render = () => {
    return (
      <div>
        <div className="boxpelayanan">
          <input
            type="date"
            className="form-control"
            placeholder="cari transaksi"
            // onKeyUp={e => this.onKeyUp(e)}
            onChange={e => this.gantiTanggal(e)}
          />
        </div>
        {/* <button onClick={this.getData()}>Cari</button>} */}
        {/* {this.state.listDaftar.length === 0 ? (
          <div className="boxpelayan">
            <strong>Untuk melihat data Transaksi</strong> klik menu pencarian.
          </div>
        ) : (
          <div className="boxpelayanan">{this.renderTable()}</div>
        )} */}
        <div className="boxpelayanan">{this.renderTable()}</div>
      </div>
    );
  };
}

export default DaftarTransaksi;

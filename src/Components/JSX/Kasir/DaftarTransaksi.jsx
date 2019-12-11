import React, { Component } from "react";
import daftarTransaksi from "../../../Methods/Kasir/Transaksi/daftarTransaksi";
import * as waktu from "../../../Methods/waktu";
import "../../ASSETS/CSS/form.css";
import { withContext } from "../../../Methods/HOC/withContext";

export class DaftarTransaksi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listDaftar: []
    };
  }

  panggilData = tanggal =>
    daftarTransaksi(this.props.getValue, tanggal).then(({ data }) =>
      this.setState({ listDaftar: data })
    );

  renderTable = () => (
    <table className="table">
      <thead>
        <tr>
          <th>tanggal transaksi</th>
          <th>waktu transaksi</th>
          <th>total biaya</th>
          <th>dicatat oleh</th>
          <th>status transaksi</th>
          <th>no transaksi</th>
        </tr>
      </thead>

      {this.state.listDaftar.map(
        ({
          uid,
          waktu_transaksi,
          total,
          nik_kasir,
          status_transaksi,
          no_transaksi
        }) => (
          <tbody key={uid}>
            <tr>
              <td>{new Date(waktu_transaksi).toLocaleDateString("en-GB")}</td>
              <td>{waktu.timeFormat(waktu_transaksi)}</td>
              <td>Rp.{waktu.conversi(total)}</td>
              <td>{nik_kasir}</td>
              <td>{status_transaksi}</td>
              <td>{no_transaksi}</td>
            </tr>
          </tbody>
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
            onChange={e => this.panggilData(e.target.value)}
          />
        </div>

        <div className="boxpelayanan">{this.renderTable()}</div>
      </div>
    );
  };
}

export default withContext(DaftarTransaksi);

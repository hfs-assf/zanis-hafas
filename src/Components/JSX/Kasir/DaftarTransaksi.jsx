import React, { Component } from "react";
import daftarTransaksi from "../../../Methods/Kasir/Transaksi/daftarTransaksi";

import * as waktu from "../../../Methods/waktu";
import "../../ASSETS/CSS/form.css";
import { Consumer } from "../../../Methods/User/Auth/Store";

export class DaftarTransaksi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listDaftar: [],
      filterTanggal: waktu.dateFormat()
    };
  }

  gantiTanggal = (e, id_lokasi) => {
    this.setState({
      filterTanggal: e.target.value
    });

    daftarTransaksi(this.state.filterTanggal, id_lokasi).then(({ data }) => {
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
          <Consumer>
            {({ state }) => {
              return (
                <input
                  type="date"
                  className="form-control"
                  placeholder="cari transaksi"
                  onChange={e =>
                    this.gantiTanggal(e, state.dataLogin.id_lokasi)
                  }
                />
              );
            }}
          </Consumer>
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

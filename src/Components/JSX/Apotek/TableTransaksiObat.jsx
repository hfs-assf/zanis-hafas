import React, { Component } from "react";
import "../../ASSETS/CSS/form.css";
import listTransaksiObat from "../../../Methods/Apotik/TransaksiObat/listTransaksiObat";
import { withContext } from "../../../Methods/HOC/withContext";
import * as waktu from "../../../Methods/waktu";

class TableTransaksiObat extends Component {
  constructor() {
    super();
    this.state = {
      filter: "",
      transaksi_obat: [],
      tanggal: {
        tanggalAwal: "",
        tanggalAkhir: ""
      }
    };
  }

  ubahValue = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  listObat = e => {
    e.preventDefault();
    listTransaksiObat(
      this.props.getValue,
      this.state.tanggalAwal,
      this.state.tanggalAkhir
    ).then(({ data }) => {
      this.setState({
        transaksi_obat: data
      });
    });
  };

  renderTable = () => (
    <table className="table">
      <thead>
        <tr>
          <th className="text-center" style={{ fontWeight: "600" }}>
            Tanggal Transaksi
          </th>
          <th className="text-center" style={{ fontWeight: "600" }}>
            Waktu Transaksi
          </th>
          <th className="text-center" style={{ fontWeight: "600" }}>
            Total Biaya
          </th>
          <th className="text-center" style={{ fontWeight: "600" }}>
            Masuk/Keluar
          </th>
          <th className="text-center" style={{ fontWeight: "600" }}>
            Dicatat Oleh
          </th>
        </tr>
      </thead>

      {this.state.transaksi_obat.map(
        ({ uid, waktu_transaksi, nama_obat, jumlah, nama_karyawan }) => (
          <tbody key={uid}>
            <tr>
              <td className="text-center">
                {new Date(waktu_transaksi).toLocaleDateString("en-GB")}
              </td>
              <td className="text-center">
                {waktu.timeFormat(waktu_transaksi)}
              </td>
              <td className="text-center">{nama_obat}</td>
              <td className="text-center">
                {jumlah > 0 ? "Masuk" : "Keluar"} sebanyak
                {" " + Math.abs(jumlah)}
              </td>
              <td className="text-center">{nama_karyawan}</td>
            </tr>
          </tbody>
        )
      )}
    </table>
  );

  render() {
    return (
      <div>
        <form onSubmit={e => this.lihatObat(e)}>
          <div className="boxtanggal">
            <input
              type="date"
              style={{ height: "100%", width: "45%" }}
              className="form-control"
              placeholder="from date"
              name="tanggalAwal"
              onChange={e => this.ubahValue(e)}
            />
            <input
              type="date"
              style={{ height: "100%", width: "45%" }}
              name="tanggalAkhir"
              className="form-control"
              placeholder="to date"
              onChange={e => this.ubahValue(e)}
            />
            <button
              className="btn btn-warning btn-sm"
              onClick={e => this.listObat(e)}
            >
              Cari
            </button>
          </div>
        </form>
        <div className="boxpelayanan">{this.renderTable()}</div>
      </div>
    );
  }
}

export default withContext(TableTransaksiObat);

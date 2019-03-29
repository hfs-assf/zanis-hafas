import React, { Component } from "react";
import "../../ASSETS/CSS/Apotek.css";
import "../../ASSETS/CSS/form.css";
import listTransaksiObat from "../../../Methods/Apotik/TransaksiObat/listTransaksiObat";

class TableTransaksiObat extends Component {
  constructor() {
    super();
    // this.onChange = this.onChange.bind(this);
    this.state = {
      transaksi_obat: []
    };
  }

  componentWillMount = () => {
    listTransaksiObat().then(({ data }) => {
      this.setState({
        transaksi_obat: data
      });
    });
  };

  // renderTransaksiObat = (
  //   index,
  //   { waktu_transaksi, nama_obat, jumlah, nik_karyawan }
  // ) => {
  //   <div className="row1" key={index}>
  //     <div className="cell">
  //       {new Date(waktu_transaksi).toLocaleDateString("en-GB")}
  //     </div>
  //     <div className="cell text-center">{nama_obat}</div>
  //     <div className="cell text-center">
  //       {jumlah < 0 ? "Keluar" : "Masuk"} sebanyak
  //       {" " + Math.abs(jumlah)}
  //     </div>
  //     <div className="cell text-center">{nik_karyawan}</div>
  //   </div>;
  // };

  render = () => {
    let header;
    const { transaksi_obat } = this.state;
    console.log(transaksi_obat, "ini filter");
    header = (
      <div className="table">
        <div className="row1 header">
          <div className="cell">Waktu Transaksi</div>
          <div className="cell">Nama Obat</div>
          <div className="cell">Keterangan</div>
          <div className="cell">Dicatat Oleh</div>
        </div>
        {transaksi_obat.map((e, index) => {
          return (
            <div className="row1" key={index}>
              <div className="cell">
                {new Date(e.waktu_transaksi).toLocaleDateString("en-GB")}
              </div>
              <div className="cell text-center">{e.nama_obat}</div>
              <div className="cell text-center">
                {e.jumlah < 0 ? "Keluar" : "Masuk"} sebanyak
                {" " + Math.abs(e.jumlah)}
              </div>
              <div className="cell text-center">{e.nik_karyawan}</div>
            </div>
          );
        })}
      </div>
    );

    return (
      <div className="card" style={{ borderTop: "2px solid #1976d2" }}>
        <div className="card-body">
          <div className="flex-container">
            <div className="box column1">
              <h2 className="card-title text-left">Daftar Transaksi Obat</h2>
            </div>
          </div>
          <hr className="hr2" />
          <div className="row">
            <div className="col-md-12 rowsoap">{header}</div>
          </div>
        </div>
      </div>
    );
  };
}

export default TableTransaksiObat;

import React, { Component } from "react";
import "../../CSS/Apotek.css";
import obat from "../../../JSON/daftarObat.json";

class TableApotek extends Component {
  daftarObat() {
    return obat.map((el, index) => (
      <div className="row1" key={index}>
        <div className="cell" data-title="Nama Obat">
          {index + 1}
        </div>
        <div className="cell" data-title="Nama Obat">
          {el.nama}
        </div>

        <div className="cell" data-title="Satuan">
          {el.kategori}
        </div>
        <div className="cell" data-title="Harga">
          {el.harga_beli}
        </div>
        <div className="cell" data-title="Keterangan">
          {el.harga_jual}
        </div>
        <div className="cell" data-title="Keterangan">
          {el.persediaan} / {el.satuan}
        </div>
        <div className="cell" data-title="Keterangan">
          {el.masa_berlaku}
        </div>
        <div className="cell" data-title="Aksi">
          <button className="btn btn-success btn-sm">Edit</button>
        </div>
      </div>
    ));
  }
  render() {
    return (
      <div className="rowsoap mt-5">
        <div className="legendtitle1">Daftar Nama Obat</div>
        <div className="table">
          <div className="row1 header">
            <div className="cell">No</div>
            <div className="cell">Nama Obat</div>
            <div className="cell">Kategori</div>
            <div className="cell">Harga Beli</div>
            <div className="cell">Harga Jual</div>
            <div className="cell">Persediaan </div>
            <div className="cell">Masa Berlaku</div>
          </div>

          {this.daftarObat()}
        </div>
      </div>
    );
  }
}

export default TableApotek;

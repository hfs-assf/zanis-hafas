import React, { Component } from "react";
import "../../CSS/Apotek.css";
import "../../CSS/form.css";
import obatList from "../../../JSON/daftarObat.json";

class TableApotek extends Component {
  state = {
    filter: ""
  };

  renderDaftarObat = obat => {
    const { filter } = this.state;
    if (filter !== "") {
      return (
        <div className="row1">
          <div className="cell">{obat.nama}</div>
          <div className="cell">{obat.kategori}</div>
          <div className="cell">{obat.persediaan + " " + obat.satuan}</div>
          <div className="cell">{obat.masa_berlaku}</div>
          <div className="cell">
            Rp.
            {obat.harga_beli}
          </div>
          <div className="cell">
            Rp.
            {obat.harga_jual}
          </div>
        </div>
      );
    }
  };

  render() {
    let header;
    const { filter } = this.state;
    const filteredObat = obatList.filter(obat => {
      return obat.nama.toLowerCase().indexOf(filter.toLowerCase()) !== -1;
    });
    if (filteredObat.length !== 0 && filter !== "") {
      header = (
        <div className="table">
          <div className="row1 header">
            <div className="cell">Nama Obat</div>
            <div className="cell">Jenis Obat</div>
            <div className="cell">Persediaan</div>
            <div className="cell">Masa Berlaku</div>
            <div className="cell">Harga Beli</div>
            <div className="cell">Harga Jual</div>
          </div>
          {filteredObat.map(obat => {
            return this.renderDaftarObat(obat);
          })}
        </div>
      );
    } else if (filteredObat.length === 0 && filter !== "") {
      header = (
        <div className="table">
          <div className="row1">
            <div className="cell">Obat tidak tersedia</div>
          </div>
        </div>
      );
    } else {
      header = (
        <div
          className="alert alert-warning alert-dismissible fade show"
          role="alert"
        >
          <strong>Untuk melihat data obat</strong> klik menu pencarian.
          <button
            type="button"
            className="close"
            data-dismiss="alert"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      );
    }
    return (
      <div className="card" style={{ borderTop: "2px solid #1976d2" }}>
        <div className="card-body">
          <div className="flex-container">
            <div className="box column1">
              <h2 className="card-title text-left">Daftar Obat</h2>
            </div>

            <div className="box column2">
              <div className="mainsearch">
                <div className="form-group has-search">
                  <span className="fa fa-search form-control-feedback" />
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Cari Obat"
                    onChange={e => this.setState({ filter: e.target.value })}
                  />
                </div>
              </div>
            </div>
          </div>
          <hr className="hr2" />
          <div className="row">
            <div className="col-md-12 rowsoap">{header}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default TableApotek;

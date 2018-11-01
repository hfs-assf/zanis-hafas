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
          <div className="cell">{obat.nama}</div>
          <div className="cell">{obat.nama}</div>
          <div className="cell">{obat.nama}</div>
          <div className="cell">{obat.nama}</div>
          <div className="cell">{obat.nama}</div>
        </div>
      );
    }
  };

  render() {
    const { filter } = this.state;
    const filteredObat = obatList.filter(obat => {
      return obat.nama.toLowerCase().indexOf(filter.toLowerCase()) !== -1;
    });
    return (
      <div className="flexpelayanan" style={{ margin: "15px 0px 10px 0px" }}>
        <div className="boxpelayanan">
          <div className="main">
            <div className="container-fluid">
              <div className="row maxrow" style={{ margin: "0px" }}>
                <div className="col-md-4"> Daftar Obat </div>
                <div className="col-md-8">
                  <input
                    type="text"
                    style={{ width: "100%" }}
                    onChange={e => this.setState({ filter: e.target.value })}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 rowsoap">
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TableApotek;

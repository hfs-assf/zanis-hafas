import React, { Component } from "react";
import { Link } from "react-router-dom";
import obatList from "../../../JSON/rekammedis.json";
import "../../CSS/option.css";

class ViewRekamMedis extends Component {
  state = {
    filter: "",
    showMe: false
  };

  showHide(value) {
    this.setState({ showMe: value });
  }
  renderDaftarObat = obat => {
    const { filter } = this.state;
    if (filter !== "") {
      return (
        <div className="row1">
          <div className="cell">{obat.id}</div>
          <div className="cell">{obat.no_rm}</div>
          <div className="cell">{obat.nama}</div>
          <div className="cell">{obat.asuransi}</div>
          <div className="cell">{obat.tanggal_masuk}</div>
          <div className="cell">
            <Link
              to="/lisrm"
              target="_blank"
              className="btn btn-success btn-sm"
            >
              Lihat Detail
            </Link>
          </div>
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
      <div className="boxpelayanan">
        <div className="pencarianmr">
          <div className="pencarian1">
            <div className="custom-radios">
              <div>
                <input
                  type="radio"
                  id="color-1"
                  name="janispasien"
                  value="color-1"
                  onClick={() => this.showHide(false)}
                />
                <label htmlFor="color-1" className="radio-inline">
                  <span />
                </label>
                Pencarian Berdasarkan Nama
              </div>

              <div className="ml-4">
                <input
                  type="radio"
                  id="color-2"
                  name="janispasien"
                  value="color-2"
                  onClick={() => this.showHide(true)}
                />
                <label htmlFor="color-2" className="radio-inline">
                  <span />
                </label>
                Berdasarkan Tanggal
              </div>
            </div>
          </div>
          {this.state.showMe ? (
            <div className="pencarian2">
              <select name="pencariantanggal" className="form-control">
                <option value="hariini">Hari Ini</option>
                <option value="bulanini">Bulan Ini</option>
              </select>
            </div>
          ) : (
            <div className="pencarian2">
              <div style={{ margin: "0px" }}>
                <input
                  type="text"
                  style={{
                    width: "100%",
                    border: "2px solid blue",
                    borderRadius: "5px"
                  }}
                  onChange={e => this.setState({ filter: e.target.value })}
                  placeholder="Cari Nama Pasien"
                />
              </div>
            </div>
          )}
        </div>
        <div className="main">
          <div className="row">
            <div className="col-md-12 rowsoap">
              <div className="table">
                <div className="row1 header">
                  <div className="cell">id</div>
                  <div className="cell">Nomor RM</div>
                  <div className="cell">Nama</div>
                  <div className="cell">Jenis Asuransi</div>
                  <div className="cell">Tanggal Masuk</div>
                  <div className="cell">Aksi</div>
                </div>
                {filteredObat.map(obat => {
                  return this.renderDaftarObat(obat);
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ViewRekamMedis;

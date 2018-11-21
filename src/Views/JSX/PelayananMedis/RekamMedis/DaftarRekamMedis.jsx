import React, { Component } from "react";
import { Link } from "react-router-dom";
import rekamMedis from "../../../../JSON/rekammedis.json";

class DaftarRekamMedis extends Component {
  state = {
    filter: ""
  };

  renderDaftarrm = rm => {
    const { filter } = this.state;
    if (filter !== "") {
      return (
        <div className="row1">
          <div className="cell">{rm.tanggal_masuk}</div>
          <div className="cell">{rm.no_rm}</div>
          <div className="cell">{rm.nama}</div>
          <div className="cell">{rm.asuransi}</div>
          <div className="cell">
            <Link
              to="/detail_rekam_medis"
              target="_blank"
              className="btn btn-primary btn-sm"
            >
              Lihat Detail
            </Link>
          </div>
        </div>
      );
    }
  };

  render() {
    let header;
    const { filter } = this.state;
    const filteredRM = rekamMedis.filter(rm => {
      return (
        rm.tanggal_masuk.toLowerCase().indexOf(filter.toLowerCase()) !== -1 ||
        rm.nama.toLowerCase().indexOf(filter.toLowerCase()) !== -1 ||
        rm.asuransi.toLowerCase().indexOf(filter.toLowerCase()) !== -1 ||
        rm.no_rm.toString().indexOf(filter) !== -1
      );
    });
    if (filteredRM.length !== 0 && filter !== "") {
      header = (
        <div className="table">
          <div className="row1 header">
            <div className="cell">Tanggal </div>
            <div className="cell">No. RM</div>
            <div className="cell">Nama</div>
            <div className="cell">Jenis Asuransi</div>
            <div className="cell">Aksi</div>
          </div>
          {filteredRM.map(rm => {
            return this.renderDaftarrm(rm);
          })}
        </div>
      );
    } else if (filteredRM.length === 0 && filter !== "") {
      header = (
        <div className="table">
          <div className="row1">
            <div className="cell">Pasien tidak ditemukan </div>
          </div>
        </div>
      );
    } else {
      header = (
        <div
          className="alert alert-warning alert-dismissible fade show"
          role="alert"
        >
          Untuk <strong> melihat rekam medis pasien </strong> lakukan dengan
          pencarian berdasarkan tanggal pelayanan, nomor RM, nama, dan jenis
          ansuransi yang pasien gunakan. Kemudian klik{" "}
          <strong>lihat detail </strong>
          pada data pasien yang diinginkan.
        </div>
      );
    }
    return (
      <div className="card" style={{ borderTop: "2px solid #1976d2" }}>
        <div className="card-body">
          <div className="flex-container">
            <div className="box column1">
              <h2 className="card-title text-left">Daftar Rekam Medis</h2>
            </div>

            <div className="box column2">
              <div className="mainsearch">
                <div className="form-group has-search">
                  <span className="fa fa-search form-control-feedback" />
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Cari Rekam Medis"
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

export default DaftarRekamMedis;

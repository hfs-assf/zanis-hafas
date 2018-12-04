import React, { Component } from "react";
import { Link } from "react-router-dom";
import listPasien from "../../../../Methods/RekamMedis/Pasien/listPasien";

class DaftarRekamMedis extends Component {
  state = {
    filter: "",
    rmPasien: []
  };

  componentWillMount() {
    listPasien().then(({ data }) => {
      this.setState({
        rmPasien: this.state.rmPasien.concat(data)
      });
    });
  }

  renderDaftarRM = rm => {
    const { filter } = this.state;
    if (filter !== "") {
      return (
        <div className="row1">
          <div className="cell">{rm.nomor_rekam_medis}</div>
          <div className="cell">{rm.nama_pasien}</div>
          <div className="cell">{rm.jenis_kelamin}</div>
          <div className="cell">{rm.status}</div>
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
    const { filter, rmPasien } = this.state;
    const filteredRM = rmPasien.filter(rm => {
      return (
        // rm.tanggal_masuk.toLowerCase().indexOf(filter.toLowerCase()) !== -1 ||
        // rm.nama_pasien.toLowerCase().indexOf(filter.toLowerCase()) !== -1 ||
        // rm.asuransi.toLowerCase().indexOf(filter.toLowerCase()) !== -1 ||
        rm.nomor_rekam_medis.toString().indexOf(filter) !== -1
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
            return this.renderDaftarRM(rm);
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
    console.log(rmPasien);
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

import React, { Component } from "react";
import listPasien from "../../../../Methods/RekamMedis/Pasien/listPasien";
import { Link } from "react-router-dom";

class DaftarRekamMedis extends Component {
  constructor() {
    super();
    this.state = {
      textFilter: "",
      showSuggestions: false,
      pasien: []
    };
  }

  onChange(e) {
    var filter = e.target.value;
    listPasien(filter).then(({ data }) => {
      this.setState({
        pasien: data,
        textFilter: filter
      });
    });
  }

  // lihatDetail(id) {
  //   window.location.assign("/detail-rekam-medis/" + id);
  // }

  renderDaftarRM = (rm, index) => {
    const { textFilter } = this.state;
    if (textFilter !== "") {
      return (
        <div className="row1" key={index}>
          <div className="cell text-center">{rm.nomor_rekam_medis}</div>
          <div className="cell">{rm.nama_pasien}</div>
          <div className="cell text-center">{rm.jenis_kelamin}</div>
          <div className="cell text-center">{rm.status}</div>
          <div className="cell text-center">
            <Link to={"/detail-detail-rekam-medis/" + rm.uid}>
              <button className="btn btn-primary btn-sm">Lihat Detail</button>
            </Link>
          </div>
        </div>
      );
    }
  };

  render() {
    let header;
    const { textFilter, pasien } = this.state;

    if (pasien.length !== 0 && textFilter !== "") {
      header = (
        <div className="table">
          <div className="row1 header">
            <div className="cell">Nomor Rekam Medis </div>
            <div className="cell">Nama</div>
            <div className="cell">Jenis Kelamin</div>
            <div className="cell">Status</div>
            <div className="cell">Aksi</div>
          </div>
          {pasien.map((rm, index) => {
            return this.renderDaftarRM(rm, index);
          })}
        </div>
      );
    } else if (pasien.length === 0 && textFilter !== "") {
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
          nama pasien . Kemudian klik <strong>lihat detail </strong>
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
                    value={textFilter}
                    onChange={e => this.onChange(e)}
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

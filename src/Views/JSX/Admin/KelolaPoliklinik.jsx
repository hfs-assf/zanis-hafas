import React, { Component } from "react";
import axios from "axios";
import TambahPoliklinik from "../../../Components/JSX/Admin/TambahPoliklinik";

class KelolaPoliklinik extends Component {
  state = {
    data: [],
    filter: "",
    selected: {},
    action: ""
  };

  componentWillMount() {
    axios
      .get(`https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t`)
      .then(ambilData => {
        this.setState({
          data: ambilData.data.teams
        });
      })
      .catch(() => alert("Data Tidak Ditemukan"));
  }

  addModal() {
    this.setState({ selected: {}, action: "add" });
  }

  editModal({ idTeam, strTeam }) {
    this.setState({ selected: { idTeam, strTeam }, action: "edit" });
  }

  // getData = e =>
  //   axios
  //     .get(`https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${e}`)
  //     .then(ambilData => {
  //       this.setState({
  //         data: ambilData.data.teams
  //       });
  //     })
  //     .catch(() => alert("Data Tidak Ditemukan"));

  rendereDaftarPoli({ idTeam, strTeam }) {
    const { filter } = this.state;
    if (filter !== "") {
      return (
        <div className="row1" key={idTeam}>
          <div className="cell text-center">{idTeam}</div>
          <div className="cell text-center">{strTeam}</div>
          <div className="cell text-center">
            <button
              className="btn btn-success btn-sm"
              onClick={() => this.editModal({ idTeam, strTeam })}
              data-toggle="modal"
              data-target="#tambahPoliklinik"
            >
              Ubah
            </button>
            <button className="btn btn-warning btn-sm">Hapus</button>
          </div>
        </div>
      );
    }
  }
  render() {
    let header;

    const { filter, data } = this.state;
    const filteredPoli = data.filter(poli => {
      return poli.strTeam.toLowerCase().indexOf(filter.toLowerCase()) !== -1;
    });
    if (filteredPoli.length !== 0 && filter !== "") {
      header = (
        <div className="table">
          <div className="row1 header">
            <div className="cell">ID#</div>
            <div className="cell">Nama Poliklinik</div>
            <div className="cell">Aksi</div>
          </div>
          {filteredPoli.map(poli => {
            return this.rendereDaftarPoli(poli);
          })}
        </div>
      );
    } else if (filteredPoli.length === 0 && filter !== "") {
      header = (
        <div className="table">
          <div className="row1">
            <div className="cell">Poliklinik tidak tersedia</div>
          </div>
        </div>
      );
    } else {
      header = (
        <div
          className="alert alert-warning alert-dismissible fade show"
          role="alert"
        >
          <strong>Untuk melihat poliklinik</strong> klik menu pencarian.
        </div>
      );
    }
    return (
      <div className="card" style={{ borderTop: "2px solid #1976d2" }}>
        <div className="card-body">
          <div className="flex-container">
            <div className="box column1">
              <h2 className="card-title text-left">
                Daftar Poliklinik
                <button
                  className="btn btn-sm btn-primary"
                  data-toggle="modal"
                  data-target="#tambahPoliklinik"
                  onClick={() => this.addModal()}
                >
                  Tambah Poliklinik{" "}
                </button>
              </h2>
            </div>

            <div className="box column2">
              <div className="mainsearch">
                <div className="form-group has-search">
                  <span className="fa fa-search form-control-feedback" />
                  <input
                    type="text"
                    ref="search"
                    className="form-control"
                    placeholder="Cari Poliklinik"
                    onKeyUp={e => this.setState({ filter: e.target.value })}
                  />
                </div>
              </div>
            </div>
          </div>
          <hr className="hr2" />
          <div className="row">
            <div className="col-md-12 rowsoap">
              <div className="table">{header}</div>
            </div>
          </div>
          <TambahPoliklinik
            selected={this.state.selected}
            action={this.state.action}
          />
        </div>
      </div>
    );
  }
}

export default KelolaPoliklinik;

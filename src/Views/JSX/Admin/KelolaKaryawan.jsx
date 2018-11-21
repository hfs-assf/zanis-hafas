import React, { Component } from "react";
import obatList from "../../../JSON/daftarObat.json";
import TambahKaryawan from "../../../Components/JSX/Admin/TambahKaryawan";

class KelolaKaryawan extends Component {
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
            <button className="btn btn-success btn-sm">Ubah</button>
            <button className="btn btn-warning btn-sm">Hapus</button>
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
            <div className="cell">NIK</div>
            <div className="cell">Nama Karyawan</div>
            <div className="cell">Peran</div>
            <div className="cell">Username</div>
            <div className="cell">Aksi</div>
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
            <div className="cell">Karyawan tidak ada</div>
          </div>
        </div>
      );
    } else {
      header = (
        <div
          className="alert alert-warning alert-dismissible fade show"
          role="alert"
        >
          <strong>Untuk melihat data karyawan</strong> klik menu pencarian.
        </div>
      );
    }
    return (
      <div className="card" style={{ borderTop: "2px solid #1976d2" }}>
        <div className="card-body">
          <div className="flex-container">
            <div className="box column1">
              <h2 className="card-title text-left">
                Daftar Karyawan{" "}
                <button
                  className="btn btn-sm btn-primary"
                  data-toggle="modal"
                  data-target="#tambahKaryawan"
                >
                  Tambah Karyawan
                </button>
              </h2>
            </div>

            <div className="box column2">
              <div className="mainsearch">
                <div className="form-group has-search">
                  <span className="fa fa-search form-control-feedback" />
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Cari Karyawan"
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
          <TambahKaryawan />
        </div>
      </div>
    );
  }
}

export default KelolaKaryawan;

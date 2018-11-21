import React, { Component } from "react";
import obatList from "../../../JSON/daftarObat.json";
import TambahPegawai from "../../../Components/JSX/Admin/TambahPegawai";

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
          <div className="cell">{obat.nama}</div>
          <div className="cell">{obat.nama}</div>
          <div className="cell">{obat.nama}</div>
          <div className="cell">{obat.nama}</div>
          <div className="cell">
            <button className="btn btn-success btn-sm">Edit</button>
            <button className="btn btn-warning btn-sm">Hapus</button>
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
      <div
        className="card"
        style={{ width: "99%", borderTop: "2px solid #1976d2" }}
      >
        <div className="card-body">
          <div
            className="flexpelayanan"
            style={{ margin: "15px 0px 10px 0px" }}
          >
            <div className="judulhalaman">
              Kelola Karyawan
              <hr className="hr3" />
            </div>
            <div className="boxpelayanan">
              <div className="main">
                <div className="row maxrow" style={{ margin: "0px" }}>
                  <div className="col-md-2">Cari Karyawan</div>
                  <div className="col-md-10">
                    <input
                      type="text"
                      className="form-control"
                      value={filter}
                      onChange={e =>
                        this.setState({
                          filter: e.target.value
                        })
                      }
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 rowsoap">
                    <div className="table">
                      <div className="row1 header">
                        <div className="cell">NIK</div>
                        <div className="cell">Nama Karyawan</div>
                        <div className="cell">Bagian / Divisi</div>
                        <div className="cell">User Name</div>
                        <div className="cell">Password</div>
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
            <button
              className="btn btn-indigo"
              data-toggle="modal"
              data-target="#tambahPegawai"
            >
              Tambah Karyawan
            </button>
            <TambahPegawai />
          </div>
        </div>
      </div>
    );
  }
}

export default KelolaKaryawan;

import React, { Component } from "react";
import FormTambahAkun from "./FormTambahAkun";
import DataCoa from "../../../JSON/dataCOA.json";
import MenuAkunting from "./MenuAkunting";
class DaftarAkun extends Component {
  daftarAkun() {
    return DataCoa.map((el, index) => (
      <div className="row1" key={index}>
        <div
          className="cell"
          style={
            el.keterangan === "0"
              ? { fontWeight: "bold" }
              : { paddingLeft: "45px" }
          }
        >
          {el.kode}-{el.no_akun}
        </div>
        <div
          className="cell"
          style={
            el.keterangan === "0"
              ? { fontWeight: "bold" }
              : { paddingLeft: "45px" }
          }
        >
          {el.nama_akun}
        </div>
        <div className="cell text-center">
          {el.keterangan === "0" ? "header" : "detail"}
        </div>
        <div className="cell text-center">Ubah | Hapus</div>
      </div>
    ));
  }

  render() {
    return (
      <div className="container-fluid">
        <MenuAkunting />
        <div
          className="card"
          style={{ borderTop: "2px solid #1976d2", width: "99%" }}
        >
          <div className="card-body">
            <div className="flex-container">
              <div className="box column1">
                <h2 className="card-title text-left">Daftar Akun</h2>
              </div>

              {/* <div className="box column2">
                <div
                  class="input-group date"
                  style={{ width: "250px", right: "-250px" }}
                >
                  <input type="date" class="form-control" />

                  <div className="calender">
                    <Calender />
                  </div>
                  <hr />
                </div>
              </div> */}
            </div>
            <hr className="hr2" />
            <div className="listCOA">
              <FormTambahAkun />
            </div>
            <div className="row">
              <div className="col-md-12 rowsoap">
                <div className="table">
                  <div className="row1 header">
                    <div className="cell">No Akun</div>
                    <div className="cell">Nama Akun</div>
                    <div className="cell">Jenis Akun</div>
                    <div className="cell">Aksi</div>
                  </div>
                  {this.daftarAkun()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DaftarAkun;

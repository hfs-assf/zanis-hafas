import React, { Component } from "react";
import Autocomplete from "../../../../Autocomplete";
import obat from "../../../../JSON/daftarPeralatan";

class LaboratoriumPasien extends Component {
  constructor() {
    super();
    this.state = {
      selector: "",
      nama_obat: []
    };
  }

  componentWillMount() {
    this.setState({ selector: obat[0].nama });
  }

  tambah() {
    var array = [...this.state.nama_obat];
    array.push(this.state.selector);
    this.setState({ nama_obat: array });
  }

  hapus() {
    var array = [...this.state.nama_obat];
    for (var i = 0; i < this.state.nama_obat.length; i++) {
      if (this.state.nama_obat[i] === this.state.selector) {
        array.splice(i, 1);
      }
    }
    this.setState({ nama_obat: array });
  }
  daftarPeralatan() {
    return this.state.nama_obat.map((nama_obat, index) => (
      <div className="row1" key={index}>
        <div className="cell" data-title="Nama Obat">
          {nama_obat}
        </div>
        <div className="cell" data-title="Jumlah">
          <input type="number" refs="jumlahobat" min="1" max="10" required />
        </div>
        <div className="cell" data-title="Satuan">
          {/* {satuan} */} unit
        </div>
        <div className="cell" data-title="Harga">
          {/* {harga_jual} */} Rp. 240000
        </div>
        <div className="cell" data-title="Keterangan">
          <input type="text" refs="keteranganobat" />
        </div>
      </div>
    ));
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="row maxrow" style={{ margin: "0px" }}>
          <div className="col-md-9">
            <Autocomplete suggestions={obat.map(a => a.nama)} />
          </div>
          <div className="col-md-3">
            <button
              className="btn btn-cyan btn-sm mt-0 mb-0"
              onClick={() => {
                this.tambah();
              }}
            >
              Tambah
            </button>
            <button className="btn btn-primary btn-sm mt-0 mb-0">Hapus</button>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 rowsoap">
            <div className="legendtitle1">Laboratorium</div>

            <div className="table">
              <div className="row1 header">
                <div className="cell">Nama Alat</div>
                <div className="cell">Jumlah</div>
                <div className="cell">Satuan</div>
                <div className="cell">Harga</div>
                <div className="cell">Keterangan</div>
              </div>

              {this.daftarPeralatan()}
            </div>
          </div>
          <div className="col-md-12 rowsoap">
            <button className="btn btn-danger">Hasil Laboratorium</button>
          </div>
        </div>
      </div>
    );
  }
}

export default LaboratoriumPasien;

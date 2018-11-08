import React, { Component } from "react";
import Autocomplete from "../../../../Autocomplete";
import tindakan from "../../../../JSON/daftarTindakan";

class TindakanSoap extends Component {
  constructor() {
    super();
    this.state = {
      selector: "",
      nama_tindakan: []
    };
  }

  componentWillMount() {
    this.setState({ selector: tindakan[0].nama });
  }

  tambah() {
    var array = [...this.state.nama_tindakan];
    array.push(this.state.selector);
    this.setState({ nama_tindakan: array });
  }

  hapus() {
    var array = [...this.state.nama_tindakan];
    for (var i = 0; i < this.state.nama_tindakan.length; i++) {
      if (this.state.nama_tindakan[i] === this.state.selector) {
        array.splice(i, 1);
      }
    }
    this.setState({ nama_tindakan: array });
  }
  daftarTindakan() {
    return this.state.nama_tindakan.map((nama_tindakan, index) => (
      <div className="row1" key={index}>
        <div className="cell" data-title="Nama tindakan">
          {nama_tindakan}
        </div>
        <div className="cell" data-title="Jumlah">
          <input
            type="number"
            refs="jumlahtindakan"
            min="1"
            max="10"
            required
          />
        </div>
        <div className="cell" data-title="Satuan">
          {/* {satuan} */} unit
        </div>
        <div className="cell" data-title="Harga">
          {/* {harga_jual} */} Rp. 240000
        </div>
        <div className="cell" data-title="Keterangan">
          <input type="text" refs="keterangantindakan" />
        </div>
      </div>
    ));
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="row maxrow" style={{ margin: "0px" }}>
          <div className="col-md-9">
            <Autocomplete suggestions={tindakan.map(a => a.nama)} />
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
            <div className="legendtitle1">Tindakan</div>

            <div className="table">
              <div className="row1 header">
                <div className="cell">Nama Tindakan</div>
                <div className="cell">Jumlah</div>
                <div className="cell">Satuan</div>
                <div className="cell">Harga</div>
                <div className="cell">Keterangan</div>
              </div>
              {this.state.unavailable}
              {this.daftarTindakan()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TindakanSoap;

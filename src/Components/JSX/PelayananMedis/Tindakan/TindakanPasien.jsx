import React, { Component } from "react";
import listTindakan from "../../../../Methods/Poli/Tindakan/listTindakan";

class tindakanTabulasi extends Component {
  constructor() {
    super();
    this.state = {
      doTindakan: [],
      filter: "",
      tindakan: []
    };
  }

  componentWillMount() {
    listTindakan().then(({ data }) => {
      this.setState({
        tindakan: this.state.tindakan.concat(data)
      });
    });
  }

  tambah(tindakan) {
    this.setState({
      doTindakan: this.state.doTindakan.concat(tindakan),
      filter: ""
    });
  }

  hapus(id) {
    var array = [...this.state.doTindakan];
    for (var i = 0; i < this.state.doTindakan.length; i++) {
      if (this.state.doTindakan[i].uid === id) {
        array.splice(i, 1);
      }
    }
    this.setState({ doTindakan: array });
  }

  reset() {
    this.setState({ doTindakan: [] });
  }
  daftardoTindakan() {
    return this.state.doTindakan.map(tindakan => (
      <div className="row1" key={tindakan.uid}>
        <div className="cell">{tindakan.nama_tindakan}</div>
        <div className="cell text-center">
          <input
            type="number"
            refs="jumlahtindakan"
            min="1"
            max="10"
            required
          />
          &nbsp;
          {tindakan.satuan}
        </div>
        <div className="cell text-right">
           Rp.
          {tindakan.biaya_tindakan}
        </div>
        <div className="cell text-center">
          <input type="text" refs="keterangantindakan" />
        </div>
        <div className="cell text-center">
          <button
            className="btn btn-outline-primary btn-sm mt-0 mb-0"
            onClick={() => {
              this.hapus(tindakan.uid);
            }}
          >
            Hapus
          </button>
        </div>
      </div>
    ));
  }

  render() {
    let suggestionsList, daftarTindakan;
    const { filter, doTindakan, tindakan } = this.state;
    const filteredTindakan = tindakan.filter(tindakan => {
      return (
        tindakan.nama_tindakan.toLowerCase().indexOf(filter.toLowerCase()) !==
        -1
      );
    });
    if (filteredTindakan.length !== 0 && filter !== "") {
      suggestionsList = (
        <ul className="suggestions">
          {filteredTindakan.map((tindakan, index) => {
            return (
              <li
                key={index}
                className="suggestion-active"
                onClick={() => this.tambah(tindakan)}
              >
                {tindakan.nama_tindakan}
              </li>
            );
          })}
          <li className="no-suggestion">Klik untuk menambahkan</li>
        </ul>
      );
    } else if (filteredTindakan.length === 0 && filter !== "") {
      suggestionsList = (
        <ul className="suggestions">
          <li className="no-suggestion">Tidak tersedia</li>
        </ul>
      );
    }
    if (doTindakan.length !== 0) {
      daftarTindakan = (
        <div className="row">
          <div className="col-md-12 rowsoap">
            <div className="legendtitle1">Tindakan</div>
            <div className="table">
              <div className="row1 header">
                <div className="cell">Nama Tindakan</div>
                <div className="cell">Jumlah</div>
                <div className="cell">Harga</div>
                <div className="cell">Keterangan</div>
                <div className="cell">Aksi</div>
              </div>
              {this.daftardoTindakan()}
            </div>
          </div>
          <div className="col-md-12">
            <div className="modal-footer justify-content-center">
              <button className="btn btn-primary">Simpan</button>
              <button className="btn btn-warning" onClick={() => this.reset()}>
                Bersihkan
              </button>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="container-fluid">
        <div className="row maxrow" style={{ margin: "0px" }}>
          <div className="col-md-2">Tambah Tindakan</div>
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
            {suggestionsList}
          </div>
        </div>
        {daftarTindakan}
      </div>
    );
  }
}

export default tindakanTabulasi;

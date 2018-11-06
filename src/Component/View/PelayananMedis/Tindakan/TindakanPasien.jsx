import React, { Component } from "react";
import tindakanList from "../../../../JSON/daftarTindakan";

class tindakanTabulasi extends Component {
  constructor() {
    super();
    this.state = {
      doTindakan: [],
      textFilter: "",
      idFilter: "",
      showSuggestions: false
    };
  }

  tambah(id) {
    var array = [...this.state.doTindakan];
    array.push(id);
    this.setState({ doTindakan: array });
    console.log(this.state.doTindakan);
  }

  hapus(id) {
    var array = [...this.state.doTindakan];
    for (var i = 0; i < this.state.doTindakan.length; i++) {
      if (this.state.doTindakan[i] === id) {
        array.splice(i, 1);
      }
    }
    this.setState({ doTindakan: array });
  }

  daftardoTindakan() {
    return this.state.doTindakan.map((id, index) => (
      <div className="row1" key={index}>
        <div className="cell">{tindakanList[id].nama}</div>
        <div className="cell text-center">
          <input
            type="number"
            refs="jumlahtindakan"
            min="1"
            max="10"
            required
          />
          &nbsp;
          {tindakanList[id].satuan}
        </div>
        <div className="cell text-right">
          Rp.
          {tindakanList[id].tarif}
        </div>
        <div className="cell text-center">
          <input type="text" refs="keterangantindakan" />
        </div>
        <div className="cell text-center">
          <button
            className="btn btn-outline-primary btn-sm mt-0 mb-0"
            onClick={() => {
              this.hapus(id);
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
    const { textFilter, showSuggestions, doTindakan } = this.state;
    const filteredTindakan = tindakanList.filter(tindakan => {
      return (
        tindakan.nama.toLowerCase().indexOf(textFilter.toLowerCase()) !== -1
      );
    });
    if (showSuggestions === true) {
      if (filteredTindakan.length !== 0 && textFilter !== "") {
        suggestionsList = (
          <ul className="suggestions">
            {filteredTindakan.map((tindakan, index) => {
              return (
                <li
                  key={index}
                  className="suggestion-active"
                  onClick={() => {
                    this.tambah(tindakan.id);
                  }}
                >
                  {tindakan.nama}
                </li>
              );
            })}
          </ul>
        );
      } else if (filteredTindakan.length === 0 && textFilter !== "") {
        suggestionsList = (
          <ul className="suggestions">
            <li className="no-suggestion">Tidak tersedia</li>
          </ul>
        );
      }
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
                <div className="cell">Detail</div>
              </div>
              {this.daftardoTindakan()}
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="container-fluid">
        <div className="row maxrow" style={{ margin: "0px" }}>
          <div className="col-md-2">
            <span>Tambah Tindakan</span>
          </div>
          <div className="col-md-10">
            <input
              type="text"
              className="form-control"
              placeholder="Cari Tindakan"
              value={textFilter}
              onChange={e =>
                this.setState({
                  textFilter: e.target.value,
                  showSuggestions: true
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

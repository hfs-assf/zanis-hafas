import React, { Component } from "react";
import obatList from "../../../../JSON/daftarObat";

class resepObatTabulasi extends Component {
  constructor() {
    super();
    this.state = {
      doObat: [],
      textFilter: "",
      idFilter: "",
      showSuggestions: false
    };
  }

  tambah(id) {
    var array = [...this.state.doObat];
    array.push(id);
    this.setState({ doObat: array });
  }

  hapus(id) {
    var array = [...this.state.doObat];
    for (var i = 0; i < this.state.doObat.length; i++) {
      if (this.state.doObat[i] === id) {
        array.splice(i, 1);
      }
    }
    this.setState({ doObat: array });
  }

  daftardoObat() {
    return this.state.doObat.map((id, index) => (
      <div className="row1" key={index}>
        <div className="cell">{obatList[id].nama}</div>
        <div className="cell text-center">
          <input type="number" refs="jumlahobat" min="1" max="10" required />
          &nbsp;
          {obatList[id].satuan}
        </div>
        <div className="cell text-right">
          Rp.
          {obatList[id].harga_jual}
        </div>
        <div className="cell text-center">
          <input type="text" refs="keteranganobat" />
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
    let suggestionsList, resep;
    const { textFilter, showSuggestions, doObat } = this.state;
    const filteredObat = obatList.filter(obat => {
      return obat.nama.toLowerCase().indexOf(textFilter.toLowerCase()) !== -1;
    });
    if (showSuggestions === true) {
      if (filteredObat.length !== 0 && textFilter !== "") {
        suggestionsList = (
          <ul className="suggestions">
            {filteredObat.map((obat, index) => {
              return (
                <li
                  key={index}
                  className="suggestion-active"
                  onClick={() => {
                    this.tambah(obat.id);
                  }}
                >
                  {obat.nama}
                </li>
              );
            })}
          </ul>
        );
      } else if (filteredObat.length === 0 && textFilter !== "") {
        suggestionsList = (
          <ul className="suggestions">
            <li className="no-suggestion">Tidak tersedia</li>
          </ul>
        );
      }
    }
    if (doObat.length !== 0) {
      resep = (
        <div className="table">
          <div className="row1 header">
            <div className="cell">Nama Obat</div>
            <div className="cell">Jumlah</div>
            <div className="cell">Harga</div>
            <div className="cell">Keterangan</div>
            <div className="cell">Detail</div>
          </div>
          {this.daftardoObat()}
        </div>
      );
    }

    return (
      <div className="container-fluid">
        <div className="row maxrow" style={{ margin: "0px" }}>
          <div className="col-md-2">
            <span>Tambah Obat</span>
          </div>
          <div className="col-md-10">
            <input
              type="text"
              className="form-control"
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
        {resep}
      </div>
    );
  }
}

export default resepObatTabulasi;

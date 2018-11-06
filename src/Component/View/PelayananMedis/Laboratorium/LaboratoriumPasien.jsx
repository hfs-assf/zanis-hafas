import React, { Component } from "react";
import peralatanList from "../../../../JSON/daftarPeralatan";
import FormHasil from "./HasilLaboratorium";

class LaboratoriumPasien extends Component {
  constructor() {
    super();
    this.state = {
      doPeralatan: [],
      textFilter: "",
      showSuggestions: false
    };
  }

  tambah(id) {
    var array = [...this.state.doPeralatan];
    array.push(id);
    this.setState({ doPeralatan: array });
  }

  hapus(id) {
    var array = [...this.state.doPeralatan];
    for (var i = 0; i < this.state.doPeralatan.length; i++) {
      if (this.state.doPeralatan[i] === id) {
        array.splice(i, 1);
      }
    }
    this.setState({ doPeralatan: array });
  }

  daftardoPeralatan() {
    return this.state.doPeralatan.map((id, index) => (
      <div className="row1" key={index}>
        <div className="cell">{peralatanList[id].nama}</div>
        <div className="cell text-center">
          <input
            type="number"
            refs="jumlahperalatan"
            min="1"
            max="10"
            required
          />
          &nbsp;
          {peralatanList[id].satuan}
        </div>
        <div className="cell text-right">
          Rp.
          {peralatanList[id].tarif}
        </div>
        <div className="cell text-center">
          <input type="text" refs="keteranganperalatan" />
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
    let suggestionsList, daftarPeralatan;
    const { textFilter, showSuggestions, doPeralatan } = this.state;
    const fiteredPeralatan = peralatanList.filter(peralatan => {
      return (
        peralatan.nama.toLowerCase().indexOf(textFilter.toLowerCase()) !== -1
      );
    });
    if (showSuggestions === true) {
      if (fiteredPeralatan.length !== 0 && textFilter !== "") {
        suggestionsList = (
          <ul className="suggestions">
            {fiteredPeralatan.map((peralatan, index) => {
              return (
                <li
                  key={index}
                  className="suggestion-active"
                  onClick={() => {
                    this.tambah(peralatan.id);
                  }}
                >
                  {peralatan.nama}
                </li>
              );
            })}
          </ul>
        );
      } else if (fiteredPeralatan.length === 0 && textFilter !== "") {
        suggestionsList = (
          <ul className="suggestions">
            <li className="no-suggestion">Tidak tersedia</li>
          </ul>
        );
      }
    }
    if (doPeralatan.length !== 0) {
      daftarPeralatan = (
        <div className="row">
          <div className="col-md-12 rowsoap">
            <div className="legendtitle1">Laboratorium</div>
            <div className="table">
              <div className="row1 header">
                <div className="cell">Nama Peralatan</div>
                <div className="cell">Jumlah</div>
                <div className="cell">Harga</div>
                <div className="cell">Keterangan</div>
                <div className="cell">Detail</div>
              </div>
              {doPeralatan.map(peralatan => this.daftardoPeralatan(peralatan))}
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="container-fluid">
        <div className="row maxrow" style={{ margin: "0px" }}>
          <div className="col-md-2">
            <span>Tambah Peralatan</span>
          </div>
          <div className="col-md-10">
            <input
              type="text"
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

        {daftarPeralatan}

        <div className="rowsoap text-right">
          <button
            className="btn btn-danger"
            data-toggle="modal"
            data-target="#formLab"
          >
            Hasil Laboratorium
          </button>
        </div>

        <FormHasil />
      </div>
    );
  }
}

export default LaboratoriumPasien;

import React, { Component } from "react";
import "../../ASSETS/CSS/Pendaftaran.css";
import pasienList from "../../../JSON/pasien";

class CariPasien extends Component {
  constructor() {
    super();
    this.state = {
      textFilter: "",
      showSuggestions: false
    };
  }
  tambahAntrian(id) {
    window.location.assign("/tambah-layanan/" + id);
  }
  render() {
    let suggestionsList;
    const { textFilter, showSuggestions } = this.state;
    const filteresPasien = pasienList.filter(pasien => {
      return (
        pasien.nama.toLowerCase().indexOf(textFilter.toLowerCase()) !== -1 ||
        pasien.no_rm.indexOf(textFilter) !== -1
      );
    });
    if (showSuggestions === true) {
      if (filteresPasien.length !== 0 && textFilter !== "") {
        suggestionsList = (
          <ul className="suggestions">
            {filteresPasien.map(pasien => {
              return (
                <li
                  key={pasien.id}
                  className="suggestion-active"
                  onClick={() => this.tambahAntrian(pasien.id)}
                >
                  {pasien.nama}
                  <br />
                  {pasien.no_rm}
                </li>
              );
            })}
          </ul>
        );
      } else if (filteresPasien.length === 0 && textFilter !== "") {
        suggestionsList = (
          <ul className="suggestions">
            <li className="no-suggestion">Tidak tersedia</li>
          </ul>
        );
      }
    }
    return (
      <div className="mainsearch">
        <div className="form-group has-search">
          <span className="fa fa-search form-control-feedback" />
          <input
            type="text"
            className="form-control"
            placeholder="Cari pasien"
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
    );
  }
}

export default CariPasien;

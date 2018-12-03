import React, { Component } from "react";
import "../../ASSETS/CSS/Pendaftaran.css";
import listPasien from "../../../Methods/RekamMedis/Pasien/listPasien";

class CariPasien extends Component {
  constructor() {
    super();
    this.state = {
      textFilter: "",
      showSuggestions: false,
      pasien: []
    };
  }

  componentWillMount() {
    listPasien().then(({ data }) => {
      this.setState({
        pasien: this.state.pasien.concat(data)
      });
    });
  }

  tambahAntrian(id) {
    window.location.assign("/tambah-layanan/" + id);
  }
  render() {
    let suggestionsList;
    const { textFilter, showSuggestions, pasien } = this.state;
    const filteresPasien = pasien.filter(pasien => {
      return (
        pasien.nama_pasien.toLowerCase().indexOf(textFilter.toLowerCase()) !==
          -1 || pasien.nomor_rekam_medis.indexOf(textFilter) !== -1
      );
    });
    if (showSuggestions === true) {
      if (filteresPasien.length !== 0 && textFilter !== "") {
        suggestionsList = (
          <ul className="suggestions">
            {filteresPasien.map(pasien => {
              return (
                <li
                  key={pasien.nomor_rekam_medis}
                  className="suggestion-active"
                  onClick={() => this.tambahAntrian(pasien.nomor_rekam_medis)}
                >
                  {pasien.nama_pasien}
                  <br />
                  {pasien.nomor_rekam_medis}
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

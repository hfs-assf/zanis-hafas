import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../ASSETS/CSS/Pendaftaran.css";
import { cariPasien } from "../../../Methods/RekamMedis/Pasien/listPasien";
import { Consumer } from "../../../Methods/User/Auth/Store";

class CariPasien extends Component {
  constructor() {
    super();
    this.state = {
      textFilter: "",
      pasien: []
    };
  }

  onChange = (e, id_lokasi) => {
    var filter = e.target.value;
    cariPasien(filter, id_lokasi).then(({ data }) => {
      this.setState({
        pasien: data,
        textFilter: filter,
        showSuggestions: true
      });
    });
  };

  render() {
    let suggestionsList;
    const { textFilter, showSuggestions, pasien } = this.state;
    const filteresPasien = pasien;
    if (showSuggestions === true) {
      if (filteresPasien.length !== 0 && textFilter !== "") {
        suggestionsList = (
          <ul className="suggestions">
            {filteresPasien.map((todo, index) => {
              return (
                <Link
                  to={"/tambah-layanan/" + todo.nomor_rekam_medis}
                  key={index}
                >
                  <li className="suggestion-active">
                    {todo.nama_pasien}
                    <br />
                    {todo.nomor_rekam_medis}
                  </li>
                </Link>
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
          <Consumer>
            {({ state }) => {
              return (
                <input
                  type="text"
                  className="form-control"
                  placeholder="Cari pasien"
                  onChange={e => this.onChange(e, state.dataLogin.id_lokasi)}
                />
              );
            }}
          </Consumer>

          {suggestionsList}
        </div>
      </div>
    );
  }
}

export default CariPasien;

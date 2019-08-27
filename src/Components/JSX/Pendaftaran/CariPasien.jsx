import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../ASSETS/CSS/Pendaftaran.css";
import listPasien from "../../../Methods/RekamMedis/Pasien/listPasien";
import listRM from "../../../Methods/RekamMedis/Pasien/listRM";

class CariPasien extends Component {
  constructor() {
    super();
    this.state = {
      textFilter: "",
      showSuggestions: false,
      pasien: []
    };
  }

  // addQueue =(e, id) => {
  //   e.preventDefault()
  //   window.location.assign("/tambah-layanan/" + id);
  // };

  onChange = e => {
    var filter = e.target.value;
    listPasien(filter).then(({ data }) => {
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
            {filteresPasien.map(todo => {
              return (
                <Link to={"/tambah-layanan/" + todo.nomor_rekam_medis}>
                  <li key={todo} className="suggestion-active">
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
          <input
            type="text"
            className="form-control"
            placeholder="Cari pasien"
            onChange={e => this.onChange(e)}
          />
          {suggestionsList}
        </div>
      </div>
    );
  }
}

export default CariPasien;

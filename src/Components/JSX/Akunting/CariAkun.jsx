import React, { Component } from "react";
import "../../ASSETS/CSS/Pendaftaran.css";
import DataCoa from "../../../JSON/dataCOA.json";
class CariAkun extends Component {
  constructor() {
    super();
    this.state = {
      textFilter: "",
      showSuggestions: false,
      account: ""
    };
  }
  changeAccount(e) {
    this.state.setState({ account: e });
  }
  render() {
    let suggestionsList;
    const { textFilter, showSuggestions } = this.state;
    const filteredAkun = DataCoa.filter(e => {
      return e.nama_akun.toLowerCase().indexOf(textFilter.toLowerCase()) !== -1;
    });
    if (showSuggestions === true) {
      if (filteredAkun.length !== 0 && textFilter !== "") {
        suggestionsList = (
          <ul className="suggestions">
            {filteredAkun.map((e, index) => {
              return (
                <li
                  key={index}
                  className="suggestion-active"
                  // onClick={() => this.changeAccount(akun)}
                >
                  {e.kode + "-" + e.no_akun}
                  <br />
                  {e.nama_akun}
                </li>
              );
            })}
            <li className="no-suggestion">Klik untuk menampilkan</li>
          </ul>
        );
      } else if (filteredAkun.length === 0 && textFilter !== "") {
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
            placeholder="Cari akun"
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

export default CariAkun;

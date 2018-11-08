import React, { Component } from "react";
import "../../CSS/Pendaftaran.css";
import pasienList from "../../../JSON/pasien";

<<<<<<< HEAD
const Pencarianpasien = props => (
  <div className="mainsearch">
    <div className="form-group has-search">
      <span className="fa fa-search form-control-feedback" />
      <input type="text" className="form-control" placeholder="Cari Pasien" />
    </div>

    <div className="kotakhasil">
      <div className="hasilpencarian">
        <div className="detailpasien">
          <div className="row">
            <div className="col">
              <ul>
                <li>Kurnianto Syaputra</li>
                <li>17 Oktober 1990</li>
              </ul>
            </div>
            <div className="col">
              <ul>
                <li>11153103190</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="hasilpencarian">
        <div className="detailpasien">
          <div className="row">
            <div className="col">
              <ul>
                <li>Kurnianto Syaputra</li>
                <li>17 Oktober 1993</li>
              </ul>
            </div>
            <div className="col">
              <ul>
                <li>11153103187</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
=======
class CariPasien extends Component {
  constructor() {
    super();
    this.state = {
      textFilter: "",
      showSuggestions: false
    };
  }
  tambahAntrian(id) {
    window.location.assign("/tambahlayanan/" + id);
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
>>>>>>> 370383111560c3aa21bbfb1eacb066421a793635

export default CariPasien;

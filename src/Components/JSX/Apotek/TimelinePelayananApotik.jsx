import React, { Component } from "react";
import "../../ASSETS/CSS/form.css";
import "../../ASSETS/CSS/Timeline.css";
import { Link } from "react-router-dom";
import { Consumer } from "../../../Methods/User/Auth/Store";
import { timeFormat } from "../../../Methods/waktu";
import listPesananObat from "../../../Methods/Apotik/PesananObat/listPesananObat";

class TimelinePelayananApotik extends Component {
  state = {
    timeline: []
  };

  componentDidMount() {
    listPesananObat("MENUNGGU")
      .then(({ data }) => {
        this.setState({
          timeline: data
        });
      })
      .catch(e => console.log("error", e));
  }

  header = value => {
    const { timeline } = this.state;
    const filter = timeline.filter(el => el.id_lokasi === value);
    return filter.map(e => {
      return (
        <li key={e.uid} className="animated bounceIn">
          <Link to={"/layanan-apotek/" + e.uid + "/" + e.nomor_rekam_medis}>
            <span />
            <div className="menunggu"> {e.status_pesanan} </div>
            <div>
              <div className="title">{e.nomor_rekam_medis}</div>
              <div className="tefalsext-white">{e.nama_pasien}</div>
              <div className="tefalsext-white">
                {new Date(e.waktu_pesan).toLocaleDateString("en-GB")}
              </div>
            </div>
            <span className="number">
              <span>{timeFormat(e.waktu_pesan)}</span>
            </span>
          </Link>
        </li>
      );
    });
  };

  render() {
    return (
      <div className="row">
        <div className="col-md-4">
          <div className="container">
            <Consumer>
              {({ state }) => {
                return <ul>{this.header(state.dataLogin.id_lokasi)}</ul>;
              }}
            </Consumer>
          </div>
        </div>
      </div>
    );
  }
}

export default TimelinePelayananApotik;

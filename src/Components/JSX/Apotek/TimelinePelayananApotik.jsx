import React, { Component } from "react";
import "../../ASSETS/CSS/form.css";
import "../../ASSETS/CSS/Timeline.css";
import { Link } from "react-router-dom";
import { timeFormat } from "../../../Methods/waktu";
import listPesananObat from "../../../Methods/Apotik/PesananObat/listPesananObat";
import { withContext } from "../../../Methods/HOC/withContext";

class TimelinePelayananApotik extends Component {
  _isMounted = false;
  state = {
    timeline: []
  };

  componentDidMount() {
    this._isMounted = true;
    const id_lokasi = this.props.getValue;
    listPesananObat(id_lokasi)
      .then(({ data }) => {
        if (this._isMounted) {
          this.setState({
            timeline: data
          });
        }
      })
      .catch(err => err);
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  header = () => {
    const { timeline } = this.state;

    return timeline.map(e => {
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
            <ul>{this.header()}</ul>
          </div>
        </div>
      </div>
    );
  }
}

export default withContext(TimelinePelayananApotik);

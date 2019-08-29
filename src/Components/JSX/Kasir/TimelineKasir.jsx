import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../ASSETS/CSS/Timeline.css";
import listTransaksi from "../../../Methods/Kasir/Transaksi/listTransaksi";
import { timeFormat } from "../../../Methods/waktu";
import { Consumer } from "../../../Methods/User/Auth/Store";

class TimelinePelayananMedis extends Component {
  constructor(props) {
    super(props);
    this.state = {
      antrian: [],
      nama: [],
      lAntrian: []
    };
  }

  // async getData() {
  //   let antrian = await listTransaksi("PENDING").then(data => data.data);
  //   let namaList = [];

  //   let listRM = antrian.map(el => el.nomor_rekam_medis);
  //   for (let i = 0; i < listRM.length; i++) {
  //     let nama = await detailPasien(listRM[i]).then(data => data.data);

  //     namaList.push(nama[0].nama_pasien);
  //   }

  //   return antrian.map((el, i) => ({ ...el, nama: namaList[i] }));
  // }

  componentDidMount = () => {
    // this.getData().then(data => {
    //   this.setState({
    //     lAntrian: data
    //   });
    // });
    listTransaksi("PENDING")
      // .then(data=>console.log("list", data))
      .then(({ data }) => {
        this.setState({
          lAntrian: data
        });
      });
    // .catch(err => {
    //   console.log(err);
    //   this.setState(this.state);
    // });
  };

  listAntrian = value => {
    const { lAntrian } = this.state;
    const filterData = lAntrian.filter(el => el.id_lokasi === value);
    return filterData.map(e => {
      return (
        <li key={e.uid} className="animated bounceIn">
          <Link to={"/form-pembayaran/" + e.uid + "/" + e.nomor_rekam_medis}>
            <span />
            <div className="menunggu"> {e.status_transaksi} </div>
            <div>
              <div className="title">{e.nomor_rekam_medis}</div>
              <div className="tefalsext-white">
                {new Date(e.waktu_terbit).toLocaleDateString("en-GB")}
              </div>
              <div className="type">{e.penjamin}</div>
            </div>
          </Link>
          <span className="number">
            <span>{timeFormat(e.waktu_terbit)}</span>
            <span />
          </span>
        </li>
      );
    });
  };

  render() {
    return (
      <div className="row" style={{ marginTop: "15px" }}>
        <div className="col-md-7">
          <div className="container">
            <Consumer>
              {({ state }) => {
                return <ul>{this.listAntrian(state.dataLogin.id_lokasi)}</ul>;
              }}
            </Consumer>
          </div>
        </div>
      </div>
    );
  }
}

export default TimelinePelayananMedis;

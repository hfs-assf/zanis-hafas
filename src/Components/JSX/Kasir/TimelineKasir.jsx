import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../ASSETS/CSS/Timeline.css";
import listAntrian from "../../../Methods/Pendaftaran/Antrian/listAntrian";
import detailPasien from "../../../Methods/RekamMedis/Pasien/detailPasien";

class TimelinePelayananMedis extends Component {
  constructor(props) {
    super(props);
    this.searchName = this.searchName.bind(this);
    this.state = {
      antrian: [],
      nama: []
    };
  }



  componentWillMount = () => {
    var arrays = this.state.nama;
    listAntrian().then(({ data }) =>{ 
      data.forEach(array =>{
        this.searchName(array.nomor_rekam_medis).then(datas =>{
          this.setState({nama:this.state.nama.concat(datas)})
        })
      });
      this.setState({
        antrian: this.state.antrian.concat(data),
        nama: arrays
      });
    });
    
  }


  searchName = (nomor_rekam_medis) => {
    return detailPasien(nomor_rekam_medis).then(({ data }) => {
      return data[0].nama_pasien;
    });
  }

  render() {
    let deskripsiPasien;
    const { antrian, nama} = this.state;
    deskripsiPasien = antrian.map((e, index) => {
      return (
        <li key={e.uid} className="animated bounceIn">
          <Link to={"/form-pembayaran/" + e.nomor_rekam_medis}>
            <span />
            <div className="number"> {e.nomor_antrian} </div>
            <div>
              <div className="title">{e.nomor_rekam_medis}</div>

              <div className="tefalsext-white">{nama[index]}</div>
              <div className="type">
                {e.asuransi} - {e.poli}
              </div>
            </div>
          </Link>
        </li>
      );
    });
    return (
      <div className="row">
        <div className="col-md-7">
          <div className="container">
            <ul>{deskripsiPasien}</ul>
          </div>
        </div>
      </div>
    );
  }
}

export default TimelinePelayananMedis;

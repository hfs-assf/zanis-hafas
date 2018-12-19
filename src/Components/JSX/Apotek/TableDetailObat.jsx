import React, { Component } from "react";
import "../../ASSETS/CSS/Apotek.css";
import "../../ASSETS/CSS/form.css";
import listStokObat from "../../../Methods/Apotik/StokObat/listStokObat";

class TableObat extends Component {
  state = {
    filter: "",
    obat: []
  };

  componentWillMount() {
    listStokObat(this.props.uid).then(({ data }) => {
      this.setState({
        obat: this.state.obat.concat(data)
      });
    });
  }

  renderDaftarObat = obat => {
    // const { filter } = this.state;
    // if (filter !== "") {
    return (
      <div className="row1" key={obat.uid}>
        <div className="cell text-center">
          {new Date(obat.waktu_masuk).toLocaleDateString("en-GB")}
        </div>
        <div className="cell text-center">{obat.stok}</div>
        <div className="cell text-center">
          {new Date(obat.kadaluarsa).toLocaleDateString("en-GB")}
        </div>

        <div className="cell text-center">
          <button
            className="btn btn-primary btn-sm "
            onClick={() => this.detailObat(obat.uid)}
          >
            Detail
          </button>{" "}
        </div>
      </div>
    );
    // }
  };

  render() {
    let header;
    const { obat } = this.state;
    // const filteredObat = obat.filter(obat => {
    //   return obat.nama_obat.toLowerCase().indexOf(filter.toLowerCase()) !== -1;
    // });
    const filteredObat = obat.length;
    console.log("f" + filteredObat);

    if (
      filteredObat !== 0
      // && filter !== ""
    ) {
      header = (
        <div className="table">
          <div className="row1 header">
            <div className="cell">Waktu Masuk</div>
            <div className="cell">Jumlah</div>
            <div className="cell">Kadaluarsa</div>
            <div className="cell">Aksi</div>
          </div>
          {obat.map(obat => {
            return this.renderDaftarObat(obat);
          })}
        </div>
      );
    } else {
      header = (
        <div className="table">
          <div className="row1">
            <div className="cell">Obat tidak tersedia</div>
          </div>
        </div>
      );
    }
    return (
      <div className="card col-md-7" style={{ borderTop: "2px solid #1976d2" }}>
        <div className="card-body">
          <div className="flex-container">
            <div className="box column1">
              <h2 className="card-title text-left">
                Obat Masuk
                <button
                  className="btn btn-sm btn-primary"
                  data-toggle="modal"
                  data-target="#tambahObatMasuk"
                >
                  Tambah Obat Masuk
                </button>
              </h2>
            </div>
          </div>
          <hr className="hr2" />
          <div className="row">
            <div className="col-md-12 rowsoap">{header}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default TableObat;

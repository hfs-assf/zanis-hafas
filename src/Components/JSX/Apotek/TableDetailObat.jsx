import React, { Component } from "react";
import "../../ASSETS/CSS/Apotek.css";
import "../../ASSETS/CSS/form.css";
import obatList from "../../../Methods/Apotik/Obat/listObat";
import hapusObat from "../../../Methods/Apotik/Obat/hapusObat";

class TableObat extends Component {
  state = {
    filter: "",
    obat: []
  };

  componentWillMount() {
    obatList().then(({ data }) => {
      this.setState({
        obat: this.state.obat.concat(data)
      });
    });
  }
  detailObat(uid) {
    window.location.assign("/detail-obat/" + uid);
  }
  renderDaftarObat = obat => {
    const { filter } = this.state;
    if (filter !== "") {
      return (
        <div className="row1" key={obat.uid}>
          <div className="cell">{obat.nama_obat}</div>
          <div className="cell text-center">Minum</div>
          <div className="cell text-center">0 {obat.satuan}</div>
          <div className="cell text-right">
            Rp.0
            {obat.harga_jual}
          </div>
          <div className="cell text-center">
            <button
              className="btn btn-primary btn-sm "
              onClick={() => this.detailObat(obat.uid)}
            >
              Detail
            </button>
            <button
              className="btn btn-outline-primary btn-sm"
              onClick={() => this.hapusObatByID(obat.uid)}
            >
              Hapus
            </button>
          </div>
        </div>
      );
    }
  };
  hapusObatByID = uid => {
    hapusObat(uid);
  };
  render() {
    let header;
    const { filter, obat } = this.state;
    const filteredObat = obat.filter(obat => {
      return obat.nama_obat.toLowerCase().indexOf(filter.toLowerCase()) !== -1;
    });
    if (filteredObat.length !== 0 && filter !== "") {
      header = (
        <div className="table">
          <div className="row1 header">
            <div className="cell">Nama Obat</div>
            <div className="cell">Jenis Obat</div>
            <div className="cell">Persediaan</div>
            <div className="cell">Harga Jual</div>
            <div className="cell">Aksi</div>
          </div>
          {filteredObat.map(obat => {
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
                Obat Masuk{" "}
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

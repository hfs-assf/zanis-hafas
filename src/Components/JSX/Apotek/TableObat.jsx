import React, { Component } from "react";
import "../../ASSETS/CSS/Apotek.css";
import "../../ASSETS/CSS/form.css";
import obatList from "../../../Methods/Apotik/Obat/listObat";
import HapusModal from "../hapusModal";
// import hapusObat from "../../../Methods/Apotik/Obat/hapusObat";

class TableObat extends Component {
  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
    this.state = {
      filter: "",
      obat: [],
      selected: {
        uid: ""
      },
      field: ""
    };
  }

  onChange(e) {
    e.preventDefault();
    var filter = e.target.value;
    obatList(filter).then(({ data }) => {
      this.setState({
        obat: data,
        filter: filter
      });
    });
  }

  detailObat({ uid }) {
    window.location.assign("/detail-obat/" + uid);
  }

  deleteModal({ uid }) {
    this.setState({ selected: { uid }, field: "obat" });
  }

  renderDaftarObat = ({
    uid,
    nama_obat,
    kategori,
    stok_total,
    satuan,
    harga_jual
  }) => {
    if (this.state.filter !== "") {
      return (
        <div className="row1" key={uid}>
          <div className="cell">{nama_obat}</div>
          <div className="cell text-center">{kategori}</div>
          <div className="cell text-center"> {stok_total + " " + satuan}</div>
          <div className="cell text-right">
            Rp.0
            {harga_jual}
          </div>
          <div className="cell text-center">
            <button
              className="btn btn-primary btn-sm "
              onClick={() => this.detailObat({ uid })}
            >
              Detail
            </button>
            <button
              className="btn btn-outline-primary btn-sm"
              onClick={() => this.deleteModal({ uid })}
              data-toggle="modal"
              data-target="#hapus"
            >
              Hapus
            </button>
          </div>
        </div>
      );
    }
  };

  render() {
    let header;
    const { filter, obat } = this.state;
    const filteredObat = obat;
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
    } else if (filteredObat.length === 0 && filter !== "") {
      header = (
        <div className="table">
          <div className="row1">
            <div className="cell">Obat tidak tersedia</div>
          </div>
        </div>
      );
    } else {
      header = (
        <div
          className="alert alert-warning alert-dismissible fade show"
          role="alert"
        >
          <strong>Untuk melihat data obat</strong> klik menu pencarian.
        </div>
      );
    }
    return (
      <div className="card" style={{ borderTop: "2px solid #1976d2" }}>
        <div className="card-body">
          <div className="flex-container">
            <div className="box column1">
              <h2 className="card-title text-left">Daftar Obat</h2>
            </div>

            <div className="box column2">
              <div className="mainsearch">
                <div className="form-group has-search">
                  <span className="fa fa-search form-control-feedback" />
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Cari Obat"
                    onChange={e => this.onChange(e)}
                  />
                </div>
              </div>
            </div>
          </div>
          <hr className="hr2" />
          <div className="row">
            <div className="col-md-12 rowsoap">{header}</div>
          </div>
          <HapusModal selected={this.state.selected} field={this.state.field} />
        </div>
      </div>
    );
  }
}

export default TableObat;

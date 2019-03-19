import React, { Component } from "react";
import "../../ASSETS/CSS/Apotek.css";
import "../../ASSETS/CSS/form.css";
import obatList from "../../../Methods/Apotik/Obat/listObat";
import hapusObat from "../../../Methods/Apotik/Obat/hapusObat";
import HapusModal from "../hapusModal";
// import hapusObat from "../../../Methods/Apotik/Obat/hapusObat";

let delay;

class TableObat extends Component {
  constructor() {
    super();
    // this.onChange = this.onChange.bind(this);
    this.state = {
      deleted: false,
      obat: [],
      filterKey: "",
      selected: {
        uid: ""
      },
      field: ""
    };
  }

  componentDidUpdate = () => {
    this.refresh(this.state.filterKey);
  };

  // shouldComponentUpdate = (nextProps, nextState) => {
  //   this.refresh(this.state.filterKey);
  //   return this.state.obat.length !== nextState.obat.length;
  // };

  refresh = val => {
    clearTimeout(delay);
    delay = setTimeout(() => {
      if (val) {
        obatList(val).then(({ data }) => this.setState({ obat: data }));
      } else {
        this.setState({ obat: [] });
      }
    }, 1000);
  };

  onKeyUp = e => {
    e.preventDefault();
    let val = e.target.value;
    this.setState({ filterKey: val });
  };

  detailObat = ({ uid }) => {
    window.location.assign("/detail-obat/" + uid);
  };

  deleteModal = ({ uid }) => {
    this.setState({ deleted: true, selected: { uid }, field: "obat" });
    // this.forceUpdate();
  };

  hapusData = uid => {
    console.log("menghapus data");
    hapusObat(uid).then(() => {
      console.log("berhasil dihapus");
      this.refresh(this.state.filterKey);
      this.setState(this.state);
    });
  };

  renderDaftarObat = () => (
    <div className="table">
      <div className="row1 header">
        <div className="cell">Nama Obat</div>
        <div className="cell">Jenis Obat</div>
        <div className="cell">Persediaan</div>
        <div className="cell">Harga Jual</div>
        <div className="cell">Aksi</div>
      </div>
      {this.state.obat.map(
        ({ uid, nama_obat, kategori, stok_total, satuan, harga_jual }) => (
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
        )
      )}
    </div>
  );

  render = () => {
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
                    onKeyUp={e => this.onKeyUp(e)}
                    // onChange={e => this.onChange(e)}
                  />
                </div>
              </div>
            </div>
          </div>

          <hr className="hr2" />
          <div className="row">
            <div className="col-md-12 rowsoap">
              {this.state.obat.length === 0 ? (
                <div
                  className="alert alert-warning alert-dismissible fade show"
                  role="alert"
                >
                  <strong>Untuk melihat data obat</strong> klik menu pencarian.
                </div>
              ) : (
                <div className="table">{this.renderDaftarObat()}</div>
              )}
            </div>
          </div>
          <HapusModal
            fungsi={() => this.hapusData(this.state.selected.uid)}
            selected={this.state.selected}
            field={this.state.field}
          />
        </div>
      </div>
    );
  };
}

export default TableObat;

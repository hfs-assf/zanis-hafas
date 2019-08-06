import React from "react";
import "../../ASSETS/CSS/Apotek.css";
import "../../ASSETS/CSS/form.css";
import { Link } from "react-router-dom";
import obatList from "../../../Methods/Apotik/Obat/listObat";
import hapusObat from "../../../Methods/Apotik/Obat/hapusObat";
import HapusModal from "../hapusModal";

let delay = null;

export default class TableObat extends React.Component {
  constructor() {
    super();
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

  onKeyUp = e => {
    clearTimeout(delay);
    const nilai = e.target.value;
    delay = setTimeout(() => {
      if (nilai) {
        obatList(nilai).then(({ data }) => this.setState({ obat: data }));
      } else {
        this.setState({ obat: [] });
      }
    }, 1000);

    e.preventDefault();
    this.setState({
      filterKey: nilai
    });
  };

  // detailObat = uid => {
  //   window.location.assign("/detail-obat/" + uid);
  // };

  deleteModal = uid => {
    this.setState({ deleted: true, selected: { uid }, field: "obat" });
  };

  hapusData = uid => {
    console.log("menghapus data");
    hapusObat(uid).then(() => {
      console.log("berhasil dihapus");
      window.location.reload();
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
              <Link to={"/detail-obat/" + uid}>
                <button className="btn btn-primary btn-sm ">Detail</button>
              </Link>
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
      <React.Fragment>
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
                    <strong>Untuk melihat data obat</strong> klik menu
                    pencarian.
                  </div>
                ) : (
                  <div className="table">{this.renderDaftarObat()}</div>
                )}
              </div>
            </div>
            <HapusModal
              fungsi={() => this.hapusData(this.state.selected.uid.uid)}
              selected={this.state.selected}
              field={this.state.field}
            />
          </div>
        </div>
      </React.Fragment>
    );
  };
}

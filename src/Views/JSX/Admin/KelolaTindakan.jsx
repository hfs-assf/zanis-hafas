import React, { Component } from "react";
import TambahDaftarTindakan from "../../../Components/JSX/Admin/TambahTindakan";
import listTindakan from "../../../Methods/Poli/Tindakan/listTindakan";

class KelolaTindakan extends Component {
  state = {
    filter: "",
    tindakan: []
  };

  componentWillMount() {
    listTindakan().then(({ data }) => {
      this.setState({
        tindakan: this.state.tindakan.concat(data)
      });
    });
  }

  renderDaftarTindakan = tindakan => {
    const { filter } = this.state;
    if (filter !== "") {
      return (
        <div className="row1" keys={tindakan.uid}>
          <div className="cell">{tindakan.nama_tindakan}</div>
          <div className="cell">{tindakan.biaya_tindakan}</div>

          <div className="cell">
            <button className="btn btn-success btn-sm">Ubah</button>
            <button className="btn btn-warning btn-sm">Hapus</button>
          </div>
        </div>
      );
    }
  };

  render() {
    let header;
    const { filter, tindakan } = this.state;
    const filteredTindakan = tindakan.filter(tindakan => {
      return (
        tindakan.nama_tindakan.toLowerCase().indexOf(filter.toLowerCase()) !==
        -1
      );
    });
    if (filteredTindakan.length !== 0 && filter !== "") {
      header = (
        <div className="table">
          <div className="row1 header">
            <div className="cell">Tindakan</div>
            <div className="cell">Biaya</div>
            <div className="cell">Aksi</div>
          </div>
          {filteredTindakan.map(tindakan => {
            return this.renderDaftarTindakan(tindakan);
          })}
        </div>
      );
    } else if (filteredTindakan.length === 0 && filter !== "") {
      header = (
        <div className="table">
          <div className="row1">
            <div className="cell">Tindakan tidak tersedia</div>
          </div>
        </div>
      );
    } else {
      header = (
        <div
          className="alert alert-warning alert-dismissible fade show"
          role="alert"
        >
          <strong>Untuk melihat data tindakan</strong> klik menu pencarian.
        </div>
      );
    }
    return (
      <div className="card" style={{ borderTop: "2px solid #1976d2" }}>
        <div className="card-body">
          <div className="flex-container">
            <div className="box column1">
              <h2 className="card-title text-left">
                Daftar Tindakan{" "}
                <button
                  className="btn btn-sm btn-primary"
                  data-toggle="modal"
                  data-target="#tambahTindakan"
                >
                  Tambah Tindakan{" "}
                </button>
              </h2>
            </div>

            <div className="box column2">
              <div className="mainsearch">
                <div className="form-group has-search">
                  <span className="fa fa-search form-control-feedback" />
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Cari Tindakan"
                    onChange={e => this.setState({ filter: e.target.value })}
                  />
                </div>
              </div>
            </div>
          </div>
          <hr className="hr2" />
          <div className="row">
            <div className="col-md-12 rowsoap">{header}</div>
          </div>
          <TambahDaftarTindakan />
        </div>
      </div>
    );
  }
}

export default KelolaTindakan;

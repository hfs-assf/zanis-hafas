import React, { Component } from "react";
import axios from "axios";
class KelolaPoliklinik extends Component {
  state = {
    data: []
  };

  getData = e =>
    axios
      .get(`https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${e}`)
      .then(ambilData => {
        this.setState({
          data: ambilData.data.teams
        });
      })
      .catch(() => alert("Data Tidak Ditemukan"));

  render() {
    console.log("Ini Loh Datanya", this.state.data);
    let header;
    if (this.state.data == null) {
      header = <div className="cell">Data Tidak Ditemukan</div>;
    } else {
      header = this.state.data.map((item, index) => {
        return (
          <div className="row1" key={index}>
            <div className="cell">{item.strTeam}</div>
            <div className="cell">{item.strWebsite}</div>
          </div>
        );
      });
    }

    // const { filter } = this.state;
    // const filteredObat = obatList.filter(obat => {
    //   return obat.nama.toLowerCase().indexOf(filter.toLowerCase()) !== -1;
    // });
    // if (filteredObat.length !== 0 && filter !== "") {
    //   header = (
    //
    //   );
    // } else if (filteredObat.length === 0 && filter !== "") {
    //   header = (
    //     <div className="table">
    //       <div className="row1">
    //         <div className="cell">Poliklinik tidak tersedia</div>
    //       </div>
    //     </div>
    //   );
    // } else {
    //   header = (
    //     <div
    //       className="alert alert-warning alert-dismissible fade show"
    //       role="alert"
    //     >
    //       <strong>Untuk melihat poliklinik</strong> klik menu pencarian.
    //     </div>
    //   );
    // }
    return (
      <div className="card" style={{ borderTop: "2px solid #1976d2" }}>
        <div className="card-body">
          <div className="flex-container">
            <div className="box column1">
              <h2 className="card-title text-left">
                Daftar Poliklinik
                <button
                  className="btn btn-sm btn-primary"
                  data-toggle="modal"
                  data-target="#tambahPoliklinik"
                >
                  Tambah Poliklinik{" "}
                </button>
              </h2>
            </div>

            <div className="box column2">
              <div className="mainsearch">
                <div className="form-group has-search">
                  <span className="fa fa-search form-control-feedback" />
                  <input
                    type="text"
                    ref="search"
                    className="form-control"
                    placeholder="Cari Poliklinik"
                    onKeyUp={() => this.getData(this.refs.search.value)}
                  />
                </div>
              </div>
            </div>
          </div>
          <hr className="hr2" />
          <div className="row">
            <div className="col-md-12 rowsoap">
              <div className="table" />
              <div className="row1 header">
                <div className="cell">Poliklinik</div>
                <div className="cell">Aksi</div>
              </div>
              {header}
            </div>
          </div>
          {/* <TambahPoliklinik /> */}
        </div>
      </div>
    );
  }
}

export default KelolaPoliklinik;

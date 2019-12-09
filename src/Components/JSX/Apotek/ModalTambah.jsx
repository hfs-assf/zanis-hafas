import React, { Component } from "react";
import obatList from "../../../Methods/Apotik/Obat/listObat";
import { Consumer } from "../../../Methods/User/Auth/Store";
import tambahDetailPesananObat from "../../../Methods/Apotik/DetailPesananObat/tambahDetailPesananObat";

let set;
export default class ModalTambah extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notification: "0",
      doResep: [],
      filter: "",
      daftarObat: [],
      disabled: false
    };
  }
  onKeyUp = (e, id_lokasi) => {
    clearTimeout(set);
    const nilai = e.target.value;
    set = setTimeout(() => {
      if (nilai) {
        obatList(nilai, id_lokasi).then(({ data }) =>
          this.setState({ daftarObat: data })
        );
      } else {
        this.setState({ daftarObat: [] });
      }
    }, 1000);

    e.preventDefault();
    this.setState({
      filter: nilai
    });
  };

  ubahJumlahObat = (e, i) => {
    let doResep = [...this.state.doResep];
    doResep[i].jumlah_obat = e.target.value;
    this.setState({ doResep });
  };

  ubahKeteranganObat = (e, i) => {
    const doResep = [...this.state.doResep];
    doResep[i].keterangan = e.target.value;
    this.setState({ doResep });
  };

  tambah = daftarObat => {
    this.setState({
      doResep: this.state.doResep.concat({
        uid_obat: daftarObat.uid,
        nama_obat: daftarObat.nama_obat,
        jumlah_obat: 0,
        keterangan: ""
      }),
      filter: ""
    });
  };

  reset = () => {
    this.setState({ doResep: [] });
  };

  handleSave = () => {
    tambahDetailPesananObat({
      uid_pesanan: this.props.uid_pesanan,
      uid_obat: this.state.doResep[0].uid_obat,
      jumlah_obat: this.state.doResep[0].jumlah_obat,
      keterangan: this.state.doResep[0].keterangan
    }).then(() => 
      this.props.fnRefresh()
    )
    // window.location.reload(false);
  };

  hapus = id => {
    var arrays = this.state.doResep;
    console.log("loha", arrays);
    arrays.forEach(i => {
      if (this.state.doResep.uid === id) {
        arrays.splice(i, 1);
      }
    });
    this.setState({ doResep: arrays });
  };

  tambahPesanan = () => {
    return this.state.doResep.map((resep, index) => (
      <tr key={index}>
        <td className="text-center">{resep.nama_obat}</td>
        <td className="text-center">
          <input
            style={{
              width: "2.1rem",
              border: "1px solid #aaa",
              borderRadius: "3px"
            }}
            type="number"
            refs="jumlahobat"
            min="1"
            max="10"
            onChange={e => this.ubahJumlahObat(e, index)}
            disabled={this.state.disabled}
            required
          />
          &nbsp;
          {resep.satuan}
        </td>
        <td className="text-center">
          <input
            type="text"
            refs="keteranganobat"
            onChange={e => this.ubahKeteranganObat(e, index)}
            disabled={this.state.disabled}
          />
        </td>
        <td className="text-center">
          <button
            className="btn btn-sm mt-0 mb-0 btn-danger"
            style={{ padding: "4px 12px" }}
            onClick={() => {
              this.hapus(resep.uid);
            }}
          >
            Hapus
          </button>
        </td>
      </tr>
    ));
  };
  render() {
    let suggestionList, daftarResep;
    const { filter, doResep, daftarObat } = this.state;
    const filteredResep = daftarObat;
    if (filteredResep.length !== 0 && filter !== "") {
      suggestionList = (
        <ul
          className="suggestions"
          style={{ color: "#6be", border: "1px solid #6be", width: "435px" }}
        >
          {filteredResep.map((resep, index) => {
            return (
              <li
                style={{ backgroundColor: "#6be" }}
                key={index}
                className="suggestion-active"
                onClick={() => this.tambah(resep)}
              >
                {resep.nama_obat}
              </li>
            );
          })}
          <li className="no-suggestion">Klik untuk menambahkan</li>
        </ul>
      );
    } else if (filteredResep.length === 0 && filter !== "") {
      suggestionList = (
        <ul
          className="suggestions"
          style={{ color: "#6be", border: "1px solid #6be", width: "435px" }}
        >
          <li className="no-suggestion">Tidak tersedia</li>
        </ul>
      );
    }
    if (doResep.length !== 0) {
      daftarResep = (
        <React.Fragment>
          <div className="modal-body">
            <div>
              <table className="table1">
                <thead className="headTable">
                  <tr>
                    <th className="text-center">NAMA OBAT</th>
                    <th className="text-center">JUMLAH</th>
                    <th className="text-center">ATURAN PAKAI</th>
                    <th className="text-center">AKSI</th>
                  </tr>
                </thead>
                <tbody className="bodyTable">{this.tambahPesanan()}</tbody>
              </table>
            </div>
          </div>
          <div className="modal-footer justify-content-center">
            <button
              className="btn btn-primary btn-sm"
              onClick={() => this.handleSave()}
            >
              Simpan
            </button>

            <button
              className="btn btn-warning btn-sm"
              disabled={this.state.disabled}
              onClick={() => this.reset()}
            >
              Bersihkan
            </button>
          </div>
        </React.Fragment>
      );
    }

    return (
      <div
        className="modal fade right"
        id="addmedicine"
        tabIndex="1"
        role="dialog"
        aria-labelledby="myModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-right" role="document">
          <div
            className="modal-content"
            style={{
              width: "500px"
            }}
          >
            <div
              className="modal-header info-color white-text text-center py-4"
              style={{ borderBottom: "none" }}
            >
              <div className="mainsearch">
                <div className="form-group has-search">
                  <span className="fa fa-search form-control-feedback" />
                  <Consumer>
                    {({ state }) => {
                      return (
                        <input
                          style={{ width: "435px" }}
                          type="text"
                          className="form-control"
                          placeholder="Tambah Pesanan Obat"
                          onKeyUp={e =>
                            this.onKeyUp(e, state.dataLogin.id_lokasi)
                          }
                        />
                      );
                    }}
                  </Consumer>

                  {suggestionList}
                </div>
              </div>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true" className="white-text">
                  &times;
                </span>
              </button>
            </div>
            {daftarResep}
          </div>
        </div>
      </div>
    );
  }
}

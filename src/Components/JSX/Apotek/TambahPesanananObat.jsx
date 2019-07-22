import React, { Component } from "react";
import "../../ASSETS/CSS/form.css";
import "../../ASSETS/CSS/Timeline.css";
import obatList from "../../../Methods/Apotik/Obat/listObat";
import tambahDetailPesananObat from "../../../Methods/Apotik/DetailPesananObat/tambahDetailPesananObat";
import tambahPesananObat from "../../../Methods/Apotik/PesananObat/tambahPesananObat";
import detailPasien from "../../../Methods/RekamMedis/Pasien/detailPasien";
import { Consumer } from "../../../Methods/User/Auth/Store";
import ModalKonfirmasiTindakan from "../../JSX/Animasi/ModalKonfirmasiTindakan";
import ModalKonfirmasi from "../../JSX/Animasi/ModalKonfirmasi";

let set;
export default class TambahPesananObat extends React.Component {
  state = {
    notification: "0",
    doResep: [],
    filter: "",
    daftarObat: [],
    dPasien: [],
    disabled: false
  };

  componentDidMount = () => {
    detailPasien(this.props.ambilUid).then(({ data }) => {
      this.setState({
        dPasien: data.nomor_rekam_medis
      });
    });
  };

  onKeyUp = e => {
    clearTimeout(set);
    const nilai = e.target.value;
    set = setTimeout(() => {
      if (nilai) {
        obatList(nilai).then(({ data }) => this.setState({ daftarObat: data }));
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
    let doResep = [...this.state.doResep];
    doResep[i].keterangan = e.target.value;
    this.setState({ doResep });
  };

  tambah = daftarObat => {
    this.setState({
      doResep: this.state.doResep.concat({
        uid: daftarObat.uid,
        nama_obat: daftarObat.nama_obat,
        jumlah_obat: 0,
        kategori: daftarObat.kategori,
        satuan: daftarObat.satuan,
        keterangan: ""
      }),
      filter: ""
    });
  };

  hapus = id => {
    var arrays = this.state.doResep;
    console.log("loha", arrays);
    arrays.forEach(i => {
      // console.log(index, "dapat");
      if (this.state.doResep.uid === id) {
        arrays.splice(i, 1);
      }
    });
    this.setState({ doResep: arrays });
  };

  reset() {
    this.setState({ doResep: [] });
  }

  handleSave = nik => {
    tambahPesananObat(this.props.action === "add", {
      nomor_rekam_medis: this.props.ambilUid,
      nik_dokter: nik,
      detail_pesanan_obat: this.state.doResep.map(
        ({ uid, jumlah_obat, keterangan }) => ({
          uid_obat: uid,
          jumlah_obat,
          keterangan
        })
      )
    })
      .then(
        this.setState({
          disabled: true,
          notification: "1"
        })
      )
      .catch(err => {
        console.log(err);
        this.setState({ notification: "0" });
      });
  };

  tambahPesanan = () => {
    return this.state.doResep.map((resep, index) => (
      <tbody key={index}>
        <tr>
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
              style={{
                width: "7.3rem",
                border: "1px solid #aaa",
                borderRadius: "3px"
              }}
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
      </tbody>
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
            <div className="table-responsive">
              <div className="table">
                <thead>
                  <tr>
                    <th className="text-center">NAMA OBAT</th>
                    <th className="text-center">JUMLAH</th>
                    <th className="text-center">KETERANGAN</th>
                    <th className="text-center">ACTION</th>
                  </tr>
                </thead>
                {this.tambahPesanan()}
              </div>
            </div>
          </div>
          <div className="modal-footer justify-content-center">
            <button
              className="btn btn-primary btn-sm"
              data-toggle="modal"
              data-target="#notification2"
              disabled={this.state.disabled}
              onClick={() => {
                this.props.fnTambahPesananObat(this.state.doResep);
              }}
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
                  <input
                    style={{ width: "435px" }}
                    type="text"
                    className="form-control"
                    placeholder="Tambah Pesanan Obat"
                    onKeyUp={e => this.onKeyUp(e)}
                  />
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
            {/* <ModalKonfirmasiTindakan
              passValue={this.handleSave}
              modal="notification2"
            /> */}
            <Consumer>
              {({ state }) => (
                <ModalKonfirmasiTindakan
                  passValue={() => this.handleSave(state.dataLogin.nik)}
                  modal="notification2"
                />
              )}
            </Consumer>
            <ModalKonfirmasi
              notification={this.state.notification}
              modal="konfirmasiResep"
            />
          </div>
        </div>
      </div>
    );
  }
}

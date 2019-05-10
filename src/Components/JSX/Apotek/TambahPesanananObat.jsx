import React, { Component } from "react";
import "../../ASSETS/CSS/form.css";
import "../../ASSETS/CSS/Timeline.css";
import obatList from "../../../Methods/Apotik/Obat/listObat";
import tambahDetailPesananObat from "../../../Methods/Apotik/DetailPesananObat/tambahDetailPesananObat";
import tambahPesananObat from "../../../Methods/Apotik/PesananObat/tambahPesananObat";
import Sukses from "../Animasi/Sukses";
import Gagal from "../Animasi/Gagal";

let set;
export default class TambahPesananObat extends React.Component {
  // ubahJumlahObat = this.ubahJumlahObat.bind(this);
  // ubahKeteranganObat = this.ubahKeteranganObat.bind(this);
  // handleSave = this.handleSave.bind(this);
  state = {
    notification: "0",
    doResep: [],
    filter: "",
    daftarObat: [],
    disabled: false
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

  handleSave = () => {
    tambahPesananObat({
      nomor_rekam_medis: this.props.no_rm
    })
      .then(response =>
        tambahDetailPesananObat({
          uid: response.data[0].uid,
          doResep: this.state.doResep
        })
      )
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
      <div className="row1" key={index}>
        <div className="cell">{resep.nama_obat}</div>
        <div className="cell text-center">
          <input
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
        </div>
        <div className="cell text-center">
          <input
            type="text"
            refs="keteranganobat"
            onChange={e => this.ubahKeteranganObat(e, index)}
            disabled={this.state.disabled}
          />
        </div>
        <div className="cell text-center">
          <button
            className="btn btn-outline-primary btn-sm mt-0 mb-0"
            onClick={() => {
              this.hapus(resep.uid);
            }}
          >
            Hapus
          </button>
        </div>
      </div>
    ));
  };

  render() {
    return (
      <div
        className="modal fade right"
        id="addmedicine"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="myModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-right" role="document">
          <div className="modal-content">
            <div className="modal-header info-color white-text text-center py-4">
              <div className="mainsearch">
                <div className="form-group has-search">
                  <span className="fa fa-search form-control-feedback" />
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Tambah Pesanan Obat"
                    onKeyUp=""
                  />
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
                  <tbody>
                    <tr>
                      <td className="text-center">a</td>
                      <td className="text-center">a</td>
                      <td className="text-center">a</td>
                      <td className="text-center">a</td>
                    </tr>
                  </tbody>
                </div>
              </div>
            </div>
            <div className="modal-footer justify-content-center">
              <button
                className="btn btn-info"
                onClick={event => this.tambahObat(event)}
              >
                Simpan
              </button>
              <button className="btn btn-outline-info" data-dismiss="modal">
                Kembali
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

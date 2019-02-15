import React, { Component } from "react";
import obatList from "../../../../Methods/Apotik/Obat/listObat";
import ModalKonfirmasiTindakan from "../../Animasi/ModalKonfirmasiTindakan";
import ModalKonfirmasi from "../../Animasi/ModalKonfirmasi";
import tambahDetailPesananObat from "../../../../Methods/Apotik/DetailPesananObat/tambahDetailPesananObat";
import tambahPesananObat from "../../../../Methods/Apotik/PesananObat/tambahPesananObat";
class resepObatTabulasi extends Component {
  constructor(props) {
    super(props);
    this.cariObat = this.cariObat.bind(this);
    this.ubahJumlahObat = this.ubahJumlahObat.bind(this);
    this.ubahKeteranganObat = this.ubahKeteranganObat.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.state = {
      notification: "0",
      doResep: [],
      filter: "",
      daftarObat: [],
      nik_dokter: "112121", //masih belum karna detail_antrian belum bisa filtered by uid_antrian
      disabled: false
    };
  }

  cariObat(e) {
    e.preventDefault();
    var filter = e.target.value;
    obatList(filter).then(({ data }) => {
      this.setState({
        daftarObat: data,
        filter: filter
      });
    });
  }

  ubahJumlahObat(e, i) {
    let doResep = [...this.state.doResep];
    doResep[i].jumlah_obat = e.target.value;
    this.setState({ doResep });
  }

  ubahKeteranganObat(e, i) {
    let doResep = [...this.state.doResep];
    doResep[i].keterangan = e.target.value;
    this.setState({ doResep });
  }

  tambah(daftarObat) {
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
  }

  hapus(id) {
    var array = [...this.state.doResep];
    for (var i = 0; i < this.state.doResep.length; i++) {
      if (this.state.doResep[i].uid === id) {
        array.splice(i, 1);
      }
    }
    this.setState({ doResep: array });
  }

  reset() {
    this.setState({ doResep: [] });
  }

  handleSave() {
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
  }

  daftardoResep() {
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
        <div className="cell text-right">
          Rp.
          {resep.harga_jual}
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
            disabled={this.state.disabled}
          >
            Hapus
          </button>
        </div>
      </div>
    ));
  }

  render() {
    let suggestionsList, daftarResep;
    const { filter, doResep, daftarObat } = this.state;
    const filteredResep = daftarObat;

    if (filteredResep.length !== 0 && filter !== "") {
      suggestionsList = (
        <ul className="suggestions">
          {filteredResep.map((resep, index) => {
            return (
              <li
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
      suggestionsList = (
        <ul className="suggestions">
          <li className="no-suggestion">Tidak tersedia</li>
        </ul>
      );
    }
    if (doResep.length !== 0) {
      daftarResep = (
        <div className="row">
          <div className="col-md-12 rowsoap">
            <div className="legendtitle1">Resep Obat</div>
            <div className="table">
              <div className="row1 header">
                <div className="cell">Nama Obat</div>
                <div className="cell">Jumlah</div>
                <div className="cell">Harga</div>
                <div className="cell">Keterangan</div>
                <div className="cell">Aksi</div>
              </div>
              {this.daftardoResep()}
            </div>
          </div>
          <div className="col-md-12">
            <div className="modal-footer justify-content-center">
              <button
                className="btn btn-primary"
                data-toggle="modal"
                data-target="#notification2"
                disabled={this.state.disabled}
              >
                Simpan
              </button>
              <button
                className="btn btn-warning"
                disabled={this.state.disabled}
                onClick={() => this.reset()}
              >
                Bersihkan
              </button>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="container-fluid">
        <div className="row maxrow" style={{ margin: "0px" }}>
          <div className="col-md-2">
            <span>Tambah Obat</span>
          </div>
          <div className="col-md-10">
            <input
              type="text"
              className="form-control"
              value={filter}
              onChange={e => this.cariObat(e)}
              disabled={this.state.disabled}
            />
            {suggestionsList}
          </div>
        </div>
        {daftarResep}
        <ModalKonfirmasiTindakan
          passValue={this.handleSave}
          modal="notification2"
        />
        <ModalKonfirmasi
          notification={this.state.notification}
          modal="konfirmasiResep"
        />
      </div>
    );
  }
}

export default resepObatTabulasi;

import React, { Component } from "react";
import ModalKonfirmasi from "../../Animasi/ModalKonfirmasi";
import tambahPesananObat from "../../../../Methods/Apotik/PesananObat/tambahPesananObat";
import { Consumer } from "../../../../Methods/User/Auth/Store";
import cariObat from "../../../../Methods/Apotik/Obat/cariObat";

let set;
class resepObatTabulasi extends Component {
  constructor(props) {
    super(props);
    this.ubahJumlahObat = this.ubahJumlahObat.bind(this);
    this.ubahKeteranganObat = this.ubahKeteranganObat.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.state = {
      notification: "0",
      doResep: [],
      filter: "",
      daftarObat: [],
      nik_dokter: "",
      disabled: false,
      id_lokasi: ""
    };
  }

  onKeyUp = (e, id_lokasi) => {
    console.log("id", id_lokasi);
    clearTimeout(set);
    const nilai = e.target.value;
    set = setTimeout(() => {
      if (nilai) {
        cariObat(nilai, id_lokasi).then(({ data }) =>
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
    const doResep = [...this.state.doResep];
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

  // hapus = id => {
  //   var arrays = this.state.doResep;
  //   arrays.forEach(i => {
  //     console.log(i, "dapat");
  //     if (this.state.doResep.uid === id) {
  //       arrays.splice(i, 1);
  //     }
  //   });
  //   this.setState({ doResep: arrays });
  // };

  hapus = id => {
    const arrays = this.state.doResep;
    this.setState({
      doResep: arrays.filter(el => el.uid !== id)
    });
  };

  reset() {
    this.setState({ doResep: [] });
  }

  handleSave = (nik, id_lokasi) => {
    tambahPesananObat({
      nomor_rekam_medis: this.props.no_rm,
      nik_dokter: nik,
      id_lokasi: id_lokasi,
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

  daftardoResep = () => {
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
                <div className="cell">Keterangan</div>
                <div className="cell">Aksi</div>
              </div>
              {this.daftardoResep()}
            </div>
          </div>
          <div className="col-md-12">
            <div className="modal-footer justify-content-center">
              <Consumer>
                {({ state }) => (
                  <button
                    className="btn btn-primary"
                    data-toggle="modal"
                    data-target="#notification2"
                    onClick={() =>
                      this.handleSave(
                        state.dataLogin.nik,
                        state.dataLogin.id_lokasi
                      )
                    }
                  >
                    Simpan
                  </button>
                )}
              </Consumer>

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
          <div className="col-md-2">Tambah Obat</div>
          <div className="col-md-10">
            <Consumer>
              {({ state }) => {
                return (
                  <input
                    type="text"
                    className="form-control"
                    // value={filter}
                    onKeyUp={e => this.onKeyUp(e, state.dataLogin.id_lokasi)}
                    // onChange={e => this.cariObat(e)}
                    // disabled={this.state.disabled}
                  />
                );
              }}
            </Consumer>

            {suggestionsList}
          </div>
        </div>
        {daftarResep}

        <ModalKonfirmasi
          notification={this.state.notification}
          modal="notification2"
        />
      </div>
    );
  }
}

export default resepObatTabulasi;

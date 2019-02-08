import React, { Component } from "react";
import obatList from "../../../../Methods/Apotik/Obat/listObat";
import kurangStokObat from "../../../../Methods/Apotik/StokObat/kurangStokObat";
import tambahPesananObat from "../../../../Methods/Apotik/PesananObat/tambahPesananObat";
class resepObatTabulasi extends Component {
  constructor(props) {
    super(props);
    this.cariObat = this.cariObat.bind(this);
    this.ubahJumlahObat = this.ubahJumlahObat.bind(this);
    this.ubahKeteranganObat = this.ubahKeteranganObat.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.state = {
      doResep: [],
      jumlah_obat: [],
      keterangan_obat: [],
      filter: "",
      resep: [],
      nik_dokter: "112121" //masih belum karna detail_antrian belum bisa filtered by uid_antrian
    };
  }

  cariObat(e) {
    e.preventDefault();
    var filter = e.target.value;
    obatList(filter).then(({ data }) => {
      this.setState({
        resep: data,
        filter: filter
      });
    });
  }

  ubahJumlahObat(e, i) {
    let jumlah_obat = [...this.state.jumlah_obat];
    jumlah_obat[i] = e.target.value;
    this.setState({ jumlah_obat });
  }

  ubahKeteranganObat(e, i) {
    let keterangan_obat = [...this.state.keterangan_obat];
    keterangan_obat[i] = e.target.value;
    this.setState({ keterangan_obat });
  }

  tambah(resep) {
    this.setState({
      doResep: this.state.doResep.concat(resep),
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
    for (let i = 0; i < this.state.doResep.length; i++) {
      kurangStokObat({
        uid: this.state.doResep[i].uid,
        jumlah_obat: this.state.jumlah_obat[i],
        nik_dokter: this.state.nik_dokter
      });
      tambahPesananObat({
        uid_obat: this.state.doResep[i].uid,
        nomor_rekam_medis: this.props.no_rm
      });
    }
  }

  daftardoResep() {
    return this.state.doResep.map((resep, index) => (
      <div className="row1" key={resep.uid}>
        <div className="cell">{resep.nama_obat}</div>
        <div className="cell text-center">
          <input
            type="number"
            refs="jumlahobat"
            min="1"
            max="10"
            onChange={e => this.ubahJumlahObat(e, index)}
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
  }

  render() {
    let suggestionsList, daftarResep;
    const { filter, doResep, resep } = this.state;
    const filteredResep = resep;

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
                data-placement="bottom"
                title="Simpan Data Obat "
                onClick={() => this.handleSave()}
              >
                Simpan
              </button>
              <button className="btn btn-warning" onClick={() => this.reset()}>
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
            />
            {suggestionsList}
          </div>
        </div>
        {daftarResep}
      </div>
    );
  }
}

export default resepObatTabulasi;

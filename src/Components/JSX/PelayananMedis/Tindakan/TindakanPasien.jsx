import React, { Component } from "react";
import listTindakan from "../../../../Methods/Poli/Tindakan/listTindakan";
import detailPasien from "../../../../Methods/RekamMedis/Pasien/detailPasien";
import ModalKonfirmasiTindakan from "../../Animasi/ModalKonfirmasiTindakan";
import ModalKonfirmasi from "../../Animasi/ModalKonfirmasi";
import tambahDetailTransaksi from "../../../../Methods/Kasir/DetailTransaksi/tambahDetailTransaksi.js";
import TambahTindakan from "../TambahTindakan";
import tambahHistoriTindakan from "../../../../Methods/Poli/HistoriTindakan/tambahHistoriTindakan";
import { Consumer } from "../../../../Methods/User/Auth/Store";

let set;
class tindakanTabulasi extends Component {
  constructor(props) {
    super(props);
    // this.cariTindakan = this.cariTindakan.bind(this);
    this.ubahJumlahTindakan = this.ubahJumlahTindakan.bind(this);
    this.ubahKeteranganTindakan = this.ubahKeteranganTindakan.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.addModal = this.addModal.bind(this);
    this.state = {
      notification: "0",
      doTindakan: [],
      filter: "",
      tindakan: [],
      disabled: false,
      jumlah: "",
      nik: "",
      keterangan: "",
      uid: "",
      dPasien: [],
      listHistory: [],
      selected: {},
      action: "",
      id_lokasi: ""
    };
  }

  getRm() {
    let rm = detailPasien(this.props.no_rm).then(
      data => data.data[0].histori_medis[0].uid
    );
    return rm;
  }

  componentDidMount = () => {
    this.getRm()
      .then(data =>
        this.setState({
          dPasien: data
        })
      )
      .catch(error =>
        this.setState({
          error
        })
      );
  };

  addModal = () => {
    this.setState({ selected: {}, action: "add" });
  };

  onKeyUp = (e, id_lokasi) => {
    clearTimeout(set);
    const nilai = e.target.value;
    set = setTimeout(() => {
      if (nilai) {
        listTindakan(nilai, id_lokasi).then(({ data }) =>
          this.setState({ tindakan: data })
        );
      } else {
        this.setState({ tindakan: [] });
      }
    }, 1000);

    e.preventDefault();
    this.setState({
      filter: nilai
    });
  };

  ubahJumlahTindakan(e, i) {
    let doTindakan = [...this.state.doTindakan];
    doTindakan[i].jumlah_tindakan = e.target.value;
    this.setState({ doTindakan });
  }

  ubahKeteranganTindakan(e, i) {
    let doTindakan = [...this.state.doTindakan];
    doTindakan[i].keterangan = e.target.value;
    this.setState({ doTindakan });
  }

  tambah(tindakan) {
    this.setState({
      doTindakan: this.state.doTindakan.concat({
        uid: tindakan.uid,
        nama_tindakan: tindakan.nama_tindakan,
        jumlah_tindakan: 0,
        biaya_tindakan: tindakan.biaya_tindakan,
        keterangan: ""
      }),
      filter: ""
    });
  }

  hapus = id => {
    const arrays = this.state.doTindakan;
    this.setState({
      doTindakan: arrays.filter(el => el.uid !== id)
    });
  };

  reset() {
    this.setState({ doTindakan: [] });
  }

  handleSave() {
    tambahHistoriTindakan({
      uid_histori_medis: this.state.dPasien,
      uid_tindakan: this.state.doTindakan[0].uid,
      jumlah: this.state.doTindakan[0].jumlah_tindakan,
      keterangan: this.state.doTindakan[0].keterangan
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

    tambahDetailTransaksi({
      nomor_rekam_medis: this.props.no_rm,
      listDetail: this.state.doTindakan.map(
        ({ nama_tindakan, jumlah_tindakan, biaya_tindakan }) => ({
          item_transaksi: nama_tindakan,
          jumlah_item: jumlah_tindakan,
          biaya: biaya_tindakan
        })
      )
    })
      .then(
        this.setState({
          disabled: true,
          notification: "1"
        })
      )
      // .then(data => {
      //   console.log("ini datanya , :", data);
      // })
      .catch(err => {
        console.log(err);
        this.setState({ notification: "0" });
      });
  }

  daftardoTindakan() {
    return this.state.doTindakan.map((tindakan, index) => (
      <div className="row1" key={tindakan.uid}>
        <div className="cell">{tindakan.nama_tindakan}</div>
        <div className="cell text-center">
          <input
            type="number"
            refs="jumlahtindakan"
            min="1"
            max="10"
            onChange={e => this.ubahJumlahTindakan(e, index)}
            disabled={this.state.disabled}
            required
          />
          &nbsp;
          {tindakan.satuan}
        </div>
        <div className="cell text-right">
          Rp.
          {tindakan.biaya_tindakan}
        </div>
        <div className="cell text-center">
          <input
            type="text"
            refs="keterangantindakan"
            onChange={e => this.ubahKeteranganTindakan(e, index)}
            disabled={this.state.disabled}
          />
        </div>
        <div className="cell text-center">
          <button
            className="btn btn-outline-primary btn-sm mt-0 mb-0"
            onClick={() => {
              this.hapus(tindakan.uid);
            }}
          >
            Hapus
          </button>
        </div>
      </div>
    ));
  }

  render() {
    let suggestionsList, daftarTindakan;
    const { filter, doTindakan, tindakan } = this.state;
    const filteredTindakan = tindakan;
    if (filteredTindakan.length !== 0 && filter !== "") {
      suggestionsList = (
        <ul className="suggestions">
          {filteredTindakan.map((tindakan, index) => {
            return (
              <li
                key={index}
                className="suggestion-active"
                onClick={() => this.tambah(tindakan)}
              >
                {tindakan.nama_tindakan}
              </li>
            );
          })}
          <li className="no-suggestion">Klik untuk menambahkan</li>
        </ul>
      );
    } else if (filteredTindakan.length === 0 && filter !== "") {
      suggestionsList = (
        <ul className="suggestions">
          <li className="no-suggestion">Tidak tersedia</li>
        </ul>
      );
    }
    if (doTindakan.length !== 0) {
      daftarTindakan = (
        <div className="row">
          <div className="col-md-12 rowsoap">
            <div className="legendtitle1">Tindakan</div>
            <div className="table">
              <div className="row1 header">
                <div className="cell">Nama Tindakan</div>
                <div className="cell">Jumlah</div>
                <div className="cell">Harga</div>
                <div className="cell">Keterangan</div>
                <div className="cell">Aksi</div>
              </div>
              {this.daftardoTindakan()}
            </div>
          </div>
          <div className="col-md-12">
            <div className="modal-footer justify-content-center">
              <button
                className="btn btn-primary"
                data-toggle="modal"
                data-target="#notification3"
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
          <div className="col-md-2">Cari Tindakan</div>
          <div className="col-md-8">
            <Consumer>
              {({ state }) => {
                return (
                  <input
                    type="text"
                    className="form-control"
                    onKeyUp={e => this.onKeyUp(e, state.dataLogin.id_lokasi)}
                    // value={filter}
                    // onChange={e => this.cariTindakan(e)}
                    // disabled={this.state.disabled}
                  />
                );
              }}
            </Consumer>

            {suggestionsList}
          </div>
          <div className="col-md-2">
            <button
              className="btn btn-sm"
              style={{ marginTop: "-7px", backgroundColor: "#2ad" }}
              data-toggle="modal"
              data-target="#tambahTindakan"
              onClick={() => this.addModal}
            >
              Tambah
            </button>
          </div>
        </div>
        <TambahTindakan
          selected={this.state.selected}
          action={this.state.action}
        />
        {daftarTindakan}

        <ModalKonfirmasiTindakan
          passValue={this.handleSave}
          modal="notification3"
        />

        <ModalKonfirmasi
          notification={this.state.notification}
          modal="konfirmasiTindakan"
        />
      </div>
    );
  }
}

export default tindakanTabulasi;

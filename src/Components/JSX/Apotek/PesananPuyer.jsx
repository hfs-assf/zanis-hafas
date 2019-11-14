import React, { Component } from "react";
import listPuyer from "../../../Methods/Apotik/Puyer/listPuyer";
import { Consumer } from "../../../Methods/User/Auth/Store";
import ModalKurang from "./ModalKurang";
import ModalKonfirmasi from "../Animasi/ModalKonfirmasi";
import TambahTransaksiPuyer from "../../../Methods/Apotik/Puyer/TambahTransaksiPuyer";
import EditStatusPuyer from "../../../Methods/Apotik/Puyer/EditStatusPuyer";
import editPesananObat from "../../../Methods/Apotik/PesananObat/editPesananObat";

export class PesananPuyer extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
      modalKurang: false,
      notification: "0",
      uidPuyer: ""
    };
  }
  componentDidMount = () => {
    listPuyer(this.props.uid)
      .then(({ data }) => {
        this.setState({
          list: data,
          uidPuyer: data[0].uid
        });
      })
      .catch(err => err);
  };

  handleConf = uid => {
    EditStatusPuyer(uid, "konfirmasi")
      .then(this.setState({ notification: "1" }))
      .catch(err => {
        this.setState({ notification: "0" });
      });
  };

  handleModal = uid => {
    this.setState({ modalKurang: true, selected: { uid } });
  };

  handleSave = () => {
    TambahTransaksiPuyer({
      uid_pesanan: this.props.uid,
      nomor_rekam_medis: this.props.no_rm
    })
      .then(this.setState({ notification: "1" }))
      .catch(err => {
        this.setState({ notification: "0" });
      });
    editPesananObat(this.props.uid, "KONFIRMASI")
      .then(() => {
        this.setState(this.state);
      })
      .then(this.setState({ notification: "1" }))
      .catch(err => {
        this.setState({ notification: "0" });
      });
  };

  header = value => {
    const { list } = this.state;
    const filter = list.filter(el => el.id_lokasi === value);
    return filter.map(e => {
      return (
        <tr key={e.uid}>
          <td className="text-center">{e.nama_racik}</td>
          <td className="text-center">{e.komposisi}</td>
          <td className="text-center">{e.jumlah_racik}</td>
          <td className="text-center">
            <button
              type="button"
              className="btn btn-success btn-sm"
              onClick={() => this.handleModal(e.uid)}
              data-toggle="modal"
              data-target="#addmedicine"
              title="Kurang Obat"
            >
              Kurang Obat
            </button>
          </td>
          <td className="text-center">
            <button
              type="button"
              className="btn btn-danger btn-sm"
              data-toggle="modal"
              data-target="#KonfirmasiTransaksi"
              onClick={() => this.handleConf(e.uid)}
            >
              Konfirmasi
            </button>
          </td>
        </tr>
      );
    });
  };

  render() {
    return (
      <div>
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th className="text-center">Nama Racik</th>
                <th className="text-center">Komposisi</th>
                <th className="text-center">Jumlah Racik</th>
                <th className="text-center">Kurang Obat</th>
                <th className="text-center">Konfirmasi</th>
              </tr>
            </thead>
            <Consumer>
              {({ state }) => {
                return <tbody>{this.header(state.dataLogin.id_lokasi)}</tbody>;
              }}
            </Consumer>
          </table>
        </div>
        <div className="col-md-12">
          <div className="modal-footer justify-content-center">
            <button
              className="btn btn-primary btn-sm"
              data-toggle="modal"
              data-target="#KonfirmasiTransaksi"
              onClick={() => this.handleSave()}
            >
              Simpan
            </button>
          </div>
        </div>
        <ModalKonfirmasi
          notification={this.state.notification}
          modal="KonfirmasiTransaksi"
        />
        <ModalKurang
          uidPuyer={this.state.uidPuyer}
          selected={this.state.selected}
        />
      </div>
    );
  }
}

export default PesananPuyer;

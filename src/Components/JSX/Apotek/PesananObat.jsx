import React, { Component } from "react";
import "../../ASSETS/CSS/form.css";
import "../../ASSETS/CSS/Timeline.css";
import { Consumer } from "../../../Methods/User/Auth/Store";
import hapusDetailPesanan from "../../../Methods/Apotik/DetailPesananObat/hapusDetailPesanan";
import editPesananObat from "../../../Methods/Apotik/PesananObat/editPesananObat";
import kurangStokObat from "../../../Methods/Apotik/StokObat/kurangStokObat";
import tambahDetailTransaksi from "../../../Methods/Kasir/DetailTransaksi/tambahDetailTransaksi";
import ReactToPrint from "react-to-print";
import ModalKonfirmasi from "../Animasi/ModalKonfirmasi";
import ModalTambah from "./ModalTambah";
import ListDetailPesananObat from "../../../Methods/Apotik/DetailPesananObat/ListDetailPesanan";

export class PesananObat extends Component {
  constructor() {
    super();
    this.state = {
      listPesanan: [],
      notification: "0",
      modalTambah: false,
      timer: null
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    ListDetailPesananObat(this.props.uid).then(({ data }) => {
      this.setState({
        listPesanan: data.detail_pesanan
      });
    });
  }

  mapPesanan = () => {
    return this.state.listPesanan.map(el => (
      <tr key={el.uid}>
        <td className="text-center">{el.nama_obat}</td>
        <td className="text-center">{el.jumlah_obat}</td>
        <td className="text-center">{el.satuan}</td>
        <td className="text-center">{el.kategori}</td>
        <td className="text-center">{el.keterangan}</td>
        <td className="text-center">
          <button
            type="button"
            className="btn btn-danger btn-sm"
            onClick={() => this.handleDelete(el.uid)}
          >
            Delete
          </button>
        </td>
      </tr>
    ));
  };

  fnRefresh = () => {
    console.log("refreshing");
    this.getData();
  };

  handleDelete = uid => {
    const arrays = this.state.listPesanan;
    hapusDetailPesanan(uid).then(() => {
      this.setState({
        listPesanan: arrays.filter(el => el.uid !== uid)
      });
    });
  };

  handleConfirm = (uid, id_lokasi, nik) => {
    editPesananObat(uid, "KONFIRMASI")
      .then(() => {
        this.setState(this.state);
      })
      .catch(err => console.log(err));
    kurangStokObat(uid, id_lokasi, nik)
      .then(() => {
        this.setState(this.state);
      })
      .catch(err => console.log(err));
  };

  handleCancel = uid => {
    editPesananObat(uid, "BATAL")
      .then(() => {
        this.setState(this.state);
      })
      .catch(err => console.log(err));
  };

  handleEdit = () => {
    this.setState({ modalTambah: true });
  };

  handleSave = () => {
    tambahDetailTransaksi({
      nomor_rekam_medis: this.props.no_rm,
      listDetail: this.state.listPesanan.map(
        ({ nama_obat, jumlah_obat, harga_jual }) => ({
          item_transaksi: nama_obat,
          jumlah_item: jumlah_obat,
          biaya: harga_jual
        })
      )
    })
      .then(this.setState({ notification: "1" }))
      .catch(err => {
        this.setState({ notification: "0" });
      });
  };

  render() {
    return (
      <div ref={el => (this.componentRef = el)}>
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th className="text-center">Nama Obat</th>
                <th className="text-center">Jumlah</th>
                <th className="text-center">Satuan</th>
                <th className="text-center">Kategori</th>
                <th className="text-center">Keterangan</th>
                <th className="text-center">Aksi</th>
              </tr>
            </thead>
            <tbody>{this.mapPesanan()}</tbody>
          </table>
        </div>

        <div className="flex-button">
          <div>
            <button
              style={{ margin: "10px" }}
              type="button"
              className="btn btn-success btn-sm"
              onClick={() => this.handleSave()}
              data-toggle="modal"
              data-target="#notification"
            >
              Simpan
            </button>
            <ReactToPrint
              trigger={() => (
                <a href={null}>
                  <button
                    className="btn btn-sm"
                    style={{ background: "#24a4d6" }}
                  >
                    Print
                  </button>
                </a>
              )}
              content={() => this.componentRef}
            />
            <button
              type="button"
              className="btn btn-danger btn-sm"
              onClick={() => this.handleEdit()}
              data-toggle="modal"
              data-target="#modaltambah"
              title="Tambah Obat"
            >
              Edit
            </button>
          </div>

          <div className="middle ">
            <Consumer>
              {({ state }) => {
                return (
                  <label>
                    <input
                      type="radio"
                      name="radio"
                      onClick={() =>
                        this.handleConfirm(
                          this.props.uid,
                          state.dataLogin.id_lokasi,
                          state.dataLogin.nik
                        )
                      }
                    />
                    <div className="front-end box">
                      <span>KONFIRMASI</span>
                    </div>
                  </label>
                );
              }}
            </Consumer>
            <label>
              <input
                type="radio"
                name="radio"
                onClick={() => this.handleCancel(this.props.uid)}
              />
              <div className="back-end box">
                <span>BATAL</span>
              </div>
            </label>
          </div>
        </div>
        <ModalKonfirmasi
          notification={this.state.notification}
          modal="notification"
        />
        <ModalTambah
          fnRefresh={this.fnRefresh}
          uid_pesanan={this.props.uid}
          selected={this.state.selected}
        />
      </div>
    );
  }
}

export default PesananObat;

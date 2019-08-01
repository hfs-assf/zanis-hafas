import React, { Component } from "react";
import "../../ASSETS/CSS/form.css";
import SVGBillInvoice from "../../ASSETS/SVG/SVGBillInvoice";
import DetailPasienKasir from "../DetailPasienKasir";
import FormTambahTransaksi from "./FormTambahTransksi";
import listTransaksi from "../../../Methods/Kasir/DetailTransaksi/listTransaksi";
import bayarTransaksi from "../../../Methods/Kasir/Transaksi/bayarTransaksi";
import ModalKonfirmasiTindakan from "../Animasi/ModalKonfirmasiTindakan";
import ModalKonfirmasi from "../Animasi/ModalKonfirmasi";

import { Consumer } from "../../../Methods/User/Auth/Store";

class FormPembayaran extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detailTransaksi: [],
      diskon: 0,
      notification: "0"
    };
  }

  componentDidMount = () => {
    listTransaksi(this.props.antrian_kasir).then(({ data }) => {
      this.setState({
        detailTransaksi: data
      });
    });
  };

  totalPrice = () => {
    return this.state.detailTransaksi.reduce(
      (sum, i) => (sum += i.jumlah_item * i.biaya),
      0
    );
  };

  details = () => {
    return this.state.detailTransaksi.map(e => (
      <tr key={e.uid}>
        <td>{e.item_transaksi}</td>
        <td>{e.jumlah_item} </td>
        <td>{e.biaya}</td>
        <td>{e.biaya * e.jumlah_item}</td>
      </tr>
    ));
  };

  getDiskon = () => {
    let harga = this.totalPrice();
    return harga - harga * (this.state.diskon / 100);
  };

  reset = nik => {
    bayarTransaksi({
      uid_transaksi: this.props.antrian_kasir,
      nik_kasir: nik,
      status: "CANCEL"
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

  // hapus = id => {
  //   const arrays = this.state.detailTransaksi;
  //   this.setState({
  //     detailTransaksi: arrays.filter(el => el.uid !== id)
  //   });
  // };

  handleSave = nik => {
    bayarTransaksi({
      uid_transaksi: this.props.antrian_kasir,
      nik_kasir: nik,
      status: "DONE"
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

  render() {
    let header;
    header = (
      <table className="table">
        <thead>
          <tr>
            <th>Deskripsi</th>
            <th>Jumlah</th>
            <th>Harga</th>
            <th>Total Harga</th>
          </tr>
        </thead>
        <tbody>
          {this.details()}
          <tr>
            <td colSpan="3">Total</td>
            <td>{this.totalPrice()}</td>
          </tr>
          <tr>
            <td colSpan="3">Disc (%)</td>
            <td>
              <input
                type="number"
                name="diskon"
                className="form-control"
                style={{ width: "150px" }}
                onChange={e => this.setState({ diskon: e.target.value })}
              />
            </td>
          </tr>

          <tr>
            <td colSpan="3">Jenis Pembayaran</td>
            <td>
              <select name="jenis_pembayaran" className="form-control">
                <option value="0"> asuransi / jaminan </option>
                <option value="1"> tunai</option>
                <option value="2"> kredit</option>
              </select>
            </td>
          </tr>
          <tr>
            <td colSpan="3">Total Pembayaran</td>
            <td>{this.getDiskon()}</td>
          </tr>
        </tbody>
      </table>
    );
    return (
      <div>
        <div className="container-parent">
          <div className="flex-item">
            <div className="items-subs-left">
              <DetailPasienKasir
                no_rm={this.props.kasir}
                antrian_kasir={this.props.antrian_kasir}
              />
            </div>
          </div>
          <div class="flex-item">
            <div className="items-subs">
              <SVGBillInvoice />
              <h5>Transaksi</h5>
            </div>
          </div>
          <div class="flex-item">
            <div className="items-subs">
              <SVGBillInvoice />
              <h5>Faktur</h5>
            </div>
          </div>
        </div>

        <div className="boxpelayanan">{header}</div>
        <div className="main">
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
              data-toggle="modal"
              data-target="#notification2"
              onClick={() => this.reset()}
            >
              Cancel
            </button>
          </div>
        </div>

        <FormTambahTransaksi no_rm={this.props.kasir} />
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
    );
  }
}

export default FormPembayaran;

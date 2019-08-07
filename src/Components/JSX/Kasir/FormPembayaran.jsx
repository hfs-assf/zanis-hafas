import React, { Component } from "react";
import "../../ASSETS/CSS/form.css";
import "../../ASSETS/CSS/Kwitansi.css";
import SVGBillInvoice from "../../ASSETS/SVG/SVGBillInvoice";
import DetailPasienKasir from "../DetailPasienKasir";
import listTransaksi from "../../../Methods/Kasir/DetailTransaksi/listTransaksi";
import bayarTransaksi from "../../../Methods/Kasir/Transaksi/bayarTransaksi";
import ModalKonfirmasiTindakan from "../Animasi/ModalKonfirmasiTindakan";
import ModalKonfirmasi from "../Animasi/ModalKonfirmasi";

import { Consumer } from "../../../Methods/User/Auth/Store";
import Kwitansi from "./Kwitansi";

class FormPembayaran extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transaksi: [],
      detailTransaksi: [],
      diskon: 0,
      notification: "0",
      selected: {},
      action: "",
      uid_transaksi: ""
    };
  }

  componentDidMount = () => {
    listTransaksi(this.props.antrian_kasir).then(({ data }) => {
      this.setState({
        transaksi: data,
        uid_transaksi: data[0].uid_transaksi
      });
    });
  };

  cetakFaktur = uid => {
    this.setState({ selected: { uid }, action: "cetak" });
  };

  totalPrice = () => {
    return this.state.transaksi.reduce(
      (sum, i) => (sum += i.jumlah_item * i.biaya),
      0
    );
  };

  details = () => {
    return this.state.transaksi.map(e => (
      <tr key={e.uid}>
        <td className="fontBold">{e.item_transaksi}</td>
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
            <th style={{ color: "#ccc" }}>Deskripsi</th>
            <th style={{ color: "#ccc" }}>Jumlah</th>
            <th style={{ color: "#ccc" }}>Harga</th>
            <th style={{ color: "#ccc" }}>Total Harga</th>
          </tr>
        </thead>
        <tbody>{this.details()}</tbody>
        <tr>
          <td colSpan="2" />
          <td className="fontBold">Total</td>
          <td className="fontBold">{this.totalPrice()}</td>
        </tr>
        <tr>
          <td colSpan="2" style={{ border: "none" }} />

          <td className="fontBold">Disc (%)</td>
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
          <td colSpan="2" style={{ border: "none" }} />
          <td className="fontBold" style={{ background: "papayawhip" }}>
            Total Pembayaran
          </td>
          <td className="fontBold" style={{ background: "papayawhip" }}>
            {this.getDiskon()}
          </td>
        </tr>
      </table>
    );
    return (
      <div>
        <div className="container-flex">
          <div className="item-container">
            <h5>Logo</h5>
          </div>
          <div className="item-container">
            <h5>NO: 21334</h5>
          </div>
        </div>
        {/* <div className="container-parent">
          <div className="flex-item">
            <div className="items-subs-left">
              <DetailPasienKasir
                no_rm={this.props.kasir}
                antrian_kasir={this.props.antrian_kasir}
              />
            </div>
          </div>
          <div className="flex-item">
            <div className="items-subs">
              <SVGBillInvoice />
              <h5>Transaksi</h5>
            </div>
          </div>

          <div
            className="flex-item"
            // onClick={e => this.cetakFaktur(this.state.uid_transaksi)}
            // data-toggle="modal"
            // data-target="#addFaktur"
            // title="Tambah Faktur"
          >
            <div className="items-subs">
              <SVGBillInvoice />
              <h5>Faktur</h5>
            </div>
          </div>
        </div> */}

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

        <Kwitansi
          uid={this.props.antrian_kasir}
          selected={this.state.selected}
          action={this.state.action}
          ref={el => (this.componentRef = el)}
        />
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

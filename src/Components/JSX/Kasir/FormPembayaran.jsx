import React, { Component } from "react";
import "../../ASSETS/CSS/form.css";
import SVGBillInvoice from "../../ASSETS/SVG/SVGBillInvoice";
import DetailPasienKasir from "../DetailPasienKasir";
import FormTambahTransaksi from "./FormTambahTransksi";
import listTransaksi from "../../../Methods/Kasir/DetailTransaksi/listTransaksi";

class FormPembayaran extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detailTransaksi: [],
      diskon: 0
    };
  }

  componentDidMount = () => {
    listTransaksi(this.props.antrian_kasir)
      // .then(data => console.log(data))
      .then(({ data }) => {
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

  render() {
    const divStyle = {
      fontSize: "16px",
      textAlign: "center",
      color: "#bbb"
    };

    let header;
    header = (
      <table className="table table-hover">
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
            <td colSpan="3">Total Pembayaran</td>
            <td>{this.getDiskon()}</td>
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
        </tbody>
      </table>
    );
    return (
      <div className="container-fluid center ">
        <div className="row">
          <div className="col-lg-4">
            <div className="card-counter  ">
              <DetailPasienKasir
                no_rm={this.props.kasir}
                antrian_kasir={this.props.antrian_kasir}
              />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card-counter ">
              <div className="counter-center">
                <SVGBillInvoice />
                <h5 style={divStyle}>Transaksi</h5>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card-counter ">
              <div className="counter-center">
                <SVGBillInvoice />
                <h5 style={divStyle}>Faktur</h5>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="row justify-content-center" style={{ margin: "0.5em" }}>
          <div className="col-md-8 boxriwayat">
            <DetailPasienKasir
              no_rm={this.props.kasir}
              antrian_kasir={this.props.antrian_kasir}
            />
          </div>
          <div className="col-md-4">
            <div className="row">
              <div className="boxsurat">
                <SVGBillInvoice />
                <h5 className="h5-responsive"> Transaksi</h5>
              </div>
              <div
                className="boxsurat"
                data-toggle="modal"
                data-target="#sickleaveletter"
              >
                <SVGBillInvoice />
                <h5 className="h5-responsive"> Faktur</h5>
              </div>
            </div>
          </div>
        </div> */}
        <div className="flexpelayanan">
          <div className="boxpelayanan">
            {header}
            <div className="main">
              <div className="modal-footer justify-content-center">
                <button className="btn btn-primary">Selesai</button>
              </div>
            </div>
          </div>
        </div>
        <FormTambahTransaksi no_rm={this.props.kasir} />
      </div>
    );
  }
}

export default FormPembayaran;

import React, { Component } from "react";
import "../../ASSETS/CSS/Kwitansi.css";
import listTransaksi from "../../../Methods/Kasir/DetailTransaksi/listTransaksi";

// import "../../ASSETS/CSS/form.css";

export class Kwitansi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      diskon: 0
    };
  }
  componentDidMount = () => {
    listTransaksi(this.props.uid).then(({ data }) => {
      this.setState({
        list: data
      });
    });
  };

  totalPrice = () => {
    return this.state.list.reduce(
      (sum, i) => (sum += i.jumlah_item * i.biaya),
      0
    );
  };
  getDiskon = () => {
    let harga = this.totalPrice();
    return harga - harga * (this.state.diskon / 100);
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
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {this.state.list.map(e => (
            <tr key={e.uid}>
              <td>{e.item_transaksi}</td>
              <td>{e.jumlah_item} </td>
              <td>{e.biaya}</td>
              <td>{e.biaya * e.jumlah_item}</td>
            </tr>
          ))}
          <tr>
            <td colSpan="3">Total Pembayaran</td>
            <td>{this.getDiskon()}</td>
          </tr>
        </tbody>
      </table>
    );
    return (
      <div
        className="modal fade"
        id="addFaktur"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="myModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-notify modal-info" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <div className="container-flex">
                <div className="item-container">
                  <h5>Logo</h5>
                </div>
                <div className="item-container">
                  <h5>NO: 21334</h5>
                </div>
              </div>
              <div className="container-table">{header}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Kwitansi;

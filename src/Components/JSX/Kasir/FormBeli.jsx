import React, { Component } from "react";
import "../../ASSETS/CSS/form.css";
import SVGBillInvoice from "../../ASSETS/SVG/SVGBillInvoice";
import obatList from "../../../Methods/Apotik/Obat/listObat";
let delay = null;
export class FormBeli extends Component {
  constructor() {
    super();
    this.state = {
      obat: [],
      doResep: [],
      filter: ""
    };
  }

  onKeyUp = e => {
    clearTimeout(delay);
    const nilai = e.target.value;
    delay = setTimeout(() => {
      if (nilai) {
        obatList(nilai).then(({ data }) => this.setState({ obat: data }));
      } else {
        this.setState({ obat: [] });
      }
    }, 1000);

    e.preventDefault();
    this.setState({
      filter: nilai
    });
  };

  renderDaftarObat = () => {
    return this.state.obat.map((e, i) => (
      <tr key={e.uid}>
        <td>{e.nama_obat}</td>
        <td>
          <input
            type="number"
            refs="jumlahobat"
            min="1"
            max="10"
            // onChange={e => this.ubahJumlahObat(e, i)}
            disabled={this.state.disabled}
            required
          />
          &nbsp;
          {e.satuan}
        </td>
        <td>{e.harga}</td>
      </tr>
    ));
  };

  render() {
    let header, suggestionsList;
    const { filter, obat, doResep } = this.state;
    const list = obat;
    if (list.length !== 0 && filter !== "") {
      suggestionsList = (
        <ul className="suggestions">
          {list.map((resep, index) => {
            return (
              <li
                key={index}
                className="suggestion-active"
                // onClick={() => this.tambah(resep)}
              >
                {resep.nama_obat}
              </li>
            );
          })}
          <li className="no-suggestion">Klik untuk menambahkan</li>
        </ul>
      );
    } else if (list.length === 0 && filter !== "") {
      suggestionsList = (
        <ul className="suggestions">
          <li className="no-suggestion">Tidak tersedia</li>
        </ul>
      );
    }
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
          <tr>
            <td colSpan="3">Total</td>
            <td />
          </tr>
          <tr>
            <td colSpan="3">Disc (%)</td>
            <td>
              <input
                type="number"
                name="diskon"
                className="form-control"
                style={{ width: "150px" }}
                // onChange={e => this.setState({ diskon: e.target.value })}
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
            <td />
          </tr>
        </tbody>
      </table>
    );
    return (
      <div>
        <div className="container-parent">
          <div className="flex-item">
            <div className="items-subs-center">
              <div className="mainsearch">
                <div className="form-group has-search">
                  <span className="fa fa-search form-control-feedback" />
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Cari Obat"
                    onKeyUp={e => this.onKeyUp(e)}
                  />
                  {suggestionsList}
                </div>
              </div>
            </div>
          </div>
          <div className="flex-item">
            <div className="items-subs">
              <SVGBillInvoice />
              <h5>Transaksi</h5>
            </div>
          </div>
          <div className="flex-item">
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
              // disabled={this.state.disabled}
            >
              Simpan
            </button>

            <button
              className="btn btn-warning"
              // disabled={this.state.disabled}
              // onClick={() => this.handleCancel()}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default FormBeli;

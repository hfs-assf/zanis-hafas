import React, { Component } from "react";
import obat from "../../../JSON/daftarObat.json";

class MinStockDetail extends Component {
  constructor() {
    super();
    this.state = {
      id_obat: ""
    };
  }
  daftarObatExp() {
    return obat.map((el, index) => (
      <li
        className="list-group-item d-flex justify-content-between align-items-center"
        key={index}
      >
        <span>
          <input
            type="checkbox"
            name="id_obat"
            value="{el.id}"
            checked={this.id_obat}
          />
          &nbsp;
          {el.nama}
        </span>
        <span className="badge badge-danger badge-pill">
          {el.persediaan} {el.satuan}
        </span>
      </li>
    ));
  }
  checked() {
    // this.setState({
    //   id_obat: !value
    // });
    // return(
    // if(this.id_obat===""){
    this.setState({ id_obat: "checked" });
    // } else {
    // this.setState({id_obat:""});
    // }
    // );
    // this.setState({ id_obat: !this.state.checked });
  }
  render() {
    return (
      <div
        className="modal fade"
        id="minStockDetail"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="myModalLabel"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-notify modal-primary"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <p className="heading lead">Obat yang akan habis</p>

              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true" className="white-text">
                  &times;
                </span>
              </button>
            </div>
            <div className="modal-body">
              <div className="text-center">
                <p>Harap segera melakukan pemesanan obat ke pemasok.</p>
              </div>
              <ul className="list-group z-depth-0">{this.daftarObatExp()}</ul>
              <div className="text-center">
                <p>
                  <br />
                  <input type="checkbox" />
                  Pilih semua
                </p>
              </div>
            </div>
            <div className="modal-footer justify-content-center">
              <button className="btn btn-primary">Pesan</button>
              <button className="btn btn-outline-primary" data-dismiss="modal">
                Kembali
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default MinStockDetail;

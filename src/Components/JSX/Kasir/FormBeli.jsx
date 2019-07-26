import React, { Component } from "react";
import "../../ASSETS/CSS/form.css";
import SVGBillInvoice from "../../ASSETS/SVG/SVGBillInvoice";
import TambahPesananObat from "../../JSX/Apotek/TambahPesanananObat";
import TambahTransaksi from "./TambahTransaksi";
import SVGApotik from "../../ASSETS/SVG/svgapotek";

export class FormBeli extends Component {
  constructor() {
    super();
    this.state = {
      modalObat: false,
      modalTransaksi: false
    };
  }

  tambahPesanan = () => {
    this.setState({ modalObat: true, selected: {} });
  };

  tambahTransaksi = () => {
    this.setState({ modalTransaksi: true, selected: {} });
  };

  render() {
    const icon = {
      width: "3.25em",
      display: "flex",
      justifyContent: "center"
    };

    const fonts = {
      display: "flex",
      justifyContent: "center",
      marginTop: "10px"
    };
    const h5 = {
      fontSize: "1em",
      color: "#2be",
      fontWeight: "500"
    };
    return (
      <div>
        <div className="container-beli">
          <div
            className="flex-beli"
            onClick={() => this.tambahTransaksi()}
            data-toggle="modal"
            data-target="#addtransaksi"
            title="Tambah Transaksi"
          >
            <div className="items-subs">
              <div style={icon}>
                <SVGBillInvoice />
              </div>
              <h5 style={h5}>Transaksi</h5>
            </div>
          </div>
          <div
            className="flex-beli"
            onClick={() => this.tambahPesanan()}
            data-toggle="modal"
            data-target="#addmedicine"
            title="Tambah Obat"
          >
            <div className="items-subs">
              <div style={icon}>
                <SVGApotik />
              </div>
              <div style={fonts}>
                <h5 style={h5}>Obat</h5>
              </div>
            </div>
          </div>
        </div>
        <TambahTransaksi selected={this.state.selected} />
        <TambahPesananObat selected={this.state.selected} />
      </div>
    );
  }
}

export default FormBeli;

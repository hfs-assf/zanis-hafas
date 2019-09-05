import React, { Component } from "react";
import "../../ASSETS/CSS/form.css";
import TambahPesananObat from "../../JSX/Apotek/TambahPesanananObat";
import SVGApotik from "../../ASSETS/SVG/svgapotek";

export class FormBeli extends Component {
  constructor() {
    super();
    this.state = {
      modalObat: false
    };
  }

  tambahPesanan = () => {
    this.setState({ modalObat: true, selected: {} });
  };

  render() {
    const iconObat = {
      marginTop: "14px",
      width: "3.25em",
      display: "flex",
      justifyContent: "center"
    };

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
            onClick={() => this.tambahPesanan()}
            data-toggle="modal"
            data-target="#addmedicine"
            title="Tambah Obat"
          >
            <div className="items-subs">
              <div style={iconObat}>
                <SVGApotik />
              </div>
              <div style={fonts}>
                <h5 style={h5}>Obat</h5>
              </div>
            </div>
          </div>
        </div>
        <TambahPesananObat selected={this.state.selected} />
      </div>
    );
  }
}

export default FormBeli;

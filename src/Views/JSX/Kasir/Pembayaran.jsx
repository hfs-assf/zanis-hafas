import React, { Component } from "react";
import Form from "../../../Components/JSX/Kasir/FormPembayaran";
import { PDFDownloadLink } from "@react-pdf/renderer";
class Pembayaran extends Component {
  render() {
    return (
      <div>
        <div className="box column1">
          <h2 className="card-title text-left" style={{ fontWeight: "500" }}>
            Kasir
          </h2>
        </div>

        <Form
          antrian_kasir={this.props.antrian.id}
          kasir={this.props.antrian.no_rm}
        />
      </div>
    );
  }
}

export default Pembayaran;

import React, { Component } from "react";
import ReactToPrint from "react-to-print";
import Form from "../../../Components/JSX/Kasir/FormPembayaran";
class Pembayaran extends Component {
  render() {
    return (
      <div>
        <div className="box column1">
          <h2 className="card-title text-left" style={{ fontWeight: "500" }}>
            Kasir
          </h2>
        </div>
        <ReactToPrint
          trigger={() => <a href="#">Print this out!</a>}
          content={() => this.componentRef}
        />
        <Form
          antrian_kasir={this.props.antrian.id}
          kasir={this.props.antrian.no_rm}
          ref={el => (this.componentRef = el)}
        />
      </div>
    );
  }
}

export default Pembayaran;

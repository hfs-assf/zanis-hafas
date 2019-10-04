import React, { Component } from "react";
import DataAntrian from "../../../Components/JSX/Apotek/DataAntrian";

export class PelayananApotik extends Component {
  render() {
    return (
      <DataAntrian
        antrian_pasien={this.props.antrian.id}
        no_rm={this.props.antrian.no_rm}
      />
    );
  }
}

export default PelayananApotik;

import React, { Component } from "react";
import DashboardApotek from "../../View/Apotek/DashboardAPotek";
import TableApotek from "../../View/Apotek/TableApotek";
import "../../CSS/KelolaApotek.css";

class KelolaApotek extends Component {
  render() {
    return (
      <div className="container-fluid">
        <DashboardApotek />
        <TableApotek />
      </div>
    );
  }
}

export default KelolaApotek;

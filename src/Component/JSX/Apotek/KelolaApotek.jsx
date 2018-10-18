import React, { Component } from "react";
import DashboardApotek from "../../View/Apotek/DashboardAPotek";
import TableApotek from "../../View/Apotek/TableApotek";
import FormObat from "../../View/Apotek/FormObat";
import ExpDetail from "../../View/Apotek/ExpiredDetail";
import MinStockDetail from "../../View/Apotek/MinStockDetail";

class KelolaApotek extends Component {
  render() {
    return (
      <div className="container-fluid">
        <DashboardApotek />
        <TableApotek />
        <FormObat />
        <ExpDetail />
        <MinStockDetail />
      </div>
    );
  }
}

export default KelolaApotek;

import React, { Component } from "react";
import DashboardApotek from "../../../Components/JSX/Apotek/DashboardAPotek";
import TableObat from "../../../Components/JSX/Apotek/TableObat";
import FormObat from "../../../Components/JSX/Apotek/FormObat";
import ExpDetail from "../../../Components/JSX/Apotek/ExpiredDetail";
import MinStockDetail from "../../../Components/JSX/Apotek/MinStockDetail";

class KelolaApotek extends Component {
  render() {
    return (
      <div className="container-fluid">
        <DashboardApotek />
        <br />
        <TableObat />
        <FormObat />
        <ExpDetail />
        <MinStockDetail />
      </div>
    );
  }
}

export default KelolaApotek;

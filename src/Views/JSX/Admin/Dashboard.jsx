import React, { Component } from "react";
import "../../../Components/ASSETS/CSS/Dashboard.css";
import DashboardAdmin from "../../../Components/JSX/Admin/DashboardAdmin";
class Dashboard extends Component {
  render() {
    return (
      <div className="container-fluid">
        <DashboardAdmin />
      </div>
    );
  }
}

export default Dashboard;

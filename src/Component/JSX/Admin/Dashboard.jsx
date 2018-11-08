import React, { Component } from "react";
import "../../CSS/Dashboard.css";
import DashboardAdmin from "../../View/Admin/DashboardAdmin";
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

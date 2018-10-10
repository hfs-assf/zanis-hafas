import React, { Component } from "react";
import "../../CSS/Dashboard.css";
import Dashboard1 from "../../View/DashboardHome/Infosatu";
import Dashboard2 from "../../View/DashboardHome/Infodua";
import Dashboard3 from "../../View/DashboardHome/Infotiga";
class Dashboard extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Dashboard1 />
        <div className="row">
          <div className="col-lg-4 col-xlg-3 mt-2">
            <Dashboard2 />
          </div>
          <div className="col-lg-8 col-xlg-9 mt-2">
            {" "}
            <Dashboard3 />
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;

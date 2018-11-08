import React, { Component } from "react";
import "../../CSS/Dashboard.css";
import DataDashboard1 from "../../../JSON/DashboardAdmin.json";

class DashboardSuperadmin extends Component {
  renderDataDashboard() {
    return DataDashboard1.map((item, index) => (
      <div className="card" key={index}>
        <div className="card-body">
          <div className="row">
            <div className="col-12">
              <h2 className="m-b-0">
                <img
                  src={item.photo}
                  alt={item.index}
                  style={{ width: "1em", height: "1em" }}
                />
              </h2>
              <h3 className="">{item.jumlah}</h3>
              <h6 className="card-subtitle">{item.judul}</h6>
            </div>
          </div>
        </div>
      </div>
    ));
  }
  render() {
    return <div className="card-group">{this.renderDataDashboard()}</div>;
  }
}

export default DashboardSuperadmin;

import React, { Component } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";
import DataDaerah from "../../../JSON/PasienPerkecamatan.json";

class DashboarPasienP extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-body">
          <div className="d-flex no-block">
            <h4 className="card-title">Data Pasien Per Wilayah</h4>
            <div className="ml-auto">
              <select className="custom-select">
                <option value="1">January</option>
                <option value="1">February</option>
                <option value="2">March</option>
                <option value="3">April</option>
              </select>
            </div>
          </div>
          <div id="Container">
            <ResponsiveContainer width="100%">
              <LineChart
                width={1000}
                height={500}
                data={DataDaerah}
                margin={{ top: 15, right: 30, left: 20, bottom: 5 }}
              >
                <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  name="Jumlah"
                  dataKey="berkunjung"
                  stroke="#8884d8"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    );
  }
}

export default DashboarPasienP;

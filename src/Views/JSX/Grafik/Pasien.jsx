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
import DataPasien from "../../../JSON/jumlahpasien.json";

class IndikatorAreaSasaran extends Component {
  render() {
    return (
      <div
        className="card mt-1 mb-2"
        style={{ backgroundColor: "#231b69 ", color: "white" }}
      >
        <div className="card-body">
          <div className="d-flex no-block">
            <h4 className="card-title">Data Pasien Per Wilayah</h4>
            <div className="ml-auto">
              <select className="custom-select">
                <option selected="">January</option>
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
                data={DataPasien}
                margin={{ top: 15, right: 30, left: 20, bottom: 5 }}
              >
                <XAxis
                  dataKey="name"
                  padding={{ left: 30, right: 30 }}
                  stroke="white"
                />
                <YAxis stroke="white" />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip style={{ backgroundColor: "#4A4A4A" }} />
                <Legend />
                <Line
                  type="monotone"
                  name="Pasien Umum"
                  dataKey="Umum"
                  stroke="white"
                />
                <Line
                  type="monotone"
                  name="Pasien BPJS"
                  dataKey="BPJS"
                  stroke="#ff0000"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    );
  }
}
export default IndikatorAreaSasaran;

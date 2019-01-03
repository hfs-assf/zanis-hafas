import React, { Component } from "react";
import axios from "axios";
import Preloader from "../../../Views/JSX/Preloader/Preloader";

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
// import DataPasien from "../../../JSON/jumlahpasien.json";

class IndikatorAreaSasaran extends Component {
  constructor() {
    super();
    this.state = {
      dataPasien: [],
      loading: <Preloader />
    };
  }
  componentDidMount() {
    axios
      .get("http://api.population.io/1.0/population/1980/Brazil")
      .then(ambilData => {
        this.setState({
          loading: "",
          dataPasien: ambilData.data
        });
      });
  }

  pilihBulan = x => {
    this.setState({
      loading: <Preloader />,
      dataPasien: []
    });
    var url = `http://api.population.io/1.0/population/1980/${x}`;
    axios.get(url).then(x => {
      this.setState({
        loading: "",
        dataPasien: x.data
      });
      console.log(this.state.dataPasien);
    });
  };

  render() {
    console.log(this.state.dataPasien);

    return (
      <div
        className="card mt-1 mb-2"
        style={{ backgroundColor: "#f75727 ", color: "white" }}
      >
        <div className="card-body">
          <div className="d-flex no-block">
            <h4 className="card-title">Grafik Data Pasien</h4>
            <div className="ml-auto">
              <select
                className="custom-select"
                onChange={e => {
                  console.log(e.target.value);
                  this.pilihBulan(e.target.value);
                }}
              >
                <option selected="Brazil">Brazil</option>
                <option value="Portugal">Portugal</option>
              </select>
            </div>
          </div>
          <div id="Container">
            {this.state.loading}

            <ResponsiveContainer width="100%">
              <LineChart
                width={1000}
                data={this.state.dataPasien}
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
                  name="Jumlah Perempuan"
                  dataKey="females"
                  stroke="black"
                />
                <Line
                  type="monotone"
                  name="Jumlah Lelaki"
                  dataKey="males"
                  stroke="red"
                />
                <Line
                  type="monotone"
                  name="Total Penduduk"
                  dataKey="total"
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

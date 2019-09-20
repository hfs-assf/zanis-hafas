import React, { Component } from "react";
import "../../ASSETS/CSS/Timeline.css";
import listTerapis from "../../../Methods/RekamMedis/HistorisMedis/listTerapis";
import "../../ASSETS/CSS/form.css";
import editTerapis from "../../../Methods/RekamMedis/HistorisMedis/editTerapis";
import ModalKonfirmasi from "../Animasi/ModalKonfirmasi";
import { Consumer } from "../../../Methods/User/Auth/Store";

export class TimelineTerapis extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listDaftar: [],
      nama_terapis: "",
      notification: "0"
    };
  }

  componentDidMount = () => {
    listTerapis()
      .then(({ data }) => {
        console.log("data", data);
        this.setState({
          listDaftar: data,
          nama_terapis: data[0].nama_terapis
        });
      })
      .catch(err => console.log(err, "err"));
  };

  handleForm = uid => {
    editTerapis(uid, this.state.nama_terapis)
      .then(this.setState({ notification: "1" }))
      .catch(err => {
        console.log(err, "err");
        this.setState({ notification: "0" });
      });
  };

  renderTable = value => {
    const { listDaftar } = this.state;
    // const filterData = listDaftar.filter(el => el.id_lokasi === value);

    // console.log("filter", filterData);
    return listDaftar.map(e => (
      <tr key={e.uid}>
        <td>{new Date(e.waktu_checkup).toLocaleDateString("en-GB")}</td>
        <td>{e.nama_terapis}</td>
        <td>{e.nama_pasien}</td>
        <td>{e.subjektif}</td>
        <td>{e.objektif}</td>
        <td>{e.analisa}</td>
        <td>{e.tindakan}</td>
        <td>{e.diagnosa}</td>
        <td>
          <input
            className="center"
            style={{
              width: "100px",
              outline: "none",
              fontSize: "12.5pt"
            }}
            type="text"
            name="nama_terapis"
            onChange={event =>
              this.setState({
                nama_terapis: event.target.value
              })
            }
            required
          />
        </td>

        <td>
          <button
            className="btn btn-sm btn-danger"
            onClick={() => this.handleForm(e.uid)}
            data-toggle="modal"
            data-target="#notification1"
          >
            Tambah
          </button>
        </td>
      </tr>
    ));
  };

  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>tanggal</th>
              <th>Terapis</th>
              <th>Pasien</th>
              <th>subjektif</th>
              <th>Objektif</th>
              <th>Analisa</th>
              <th>Tindakan</th>
              <th>Diagnosa</th>
              <th>Tambah</th>
              <th>Action</th>
            </tr>
          </thead>
          <Consumer>
            {({ state }) => {
              return (
                <tbody>{this.renderTable(state.dataLogin.id_lokasi)}</tbody>
              );
            }}
          </Consumer>
        </table>
        <ModalKonfirmasi
          notification={this.state.notification}
          modal="notification1"
        />
      </div>
    );
  }
}

export default TimelineTerapis;

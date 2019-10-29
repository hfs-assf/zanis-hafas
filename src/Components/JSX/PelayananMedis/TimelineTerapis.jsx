import React, { Component } from "react";
import "../../ASSETS/CSS/Timeline.css";
import listTerapis from "../../../Methods/RekamMedis/HistorisMedis/listTerapis";
import "../../ASSETS/CSS/form.css";
import editTerapis from "../../../Methods/RekamMedis/HistorisMedis/editTerapis";
import ModalKonfirmasi from "../Animasi/ModalKonfirmasi";
import { Consumer } from "../../../Methods/User/Auth/Store";
import ReactToPrint from "react-to-print";
import { withContext } from "../../../Methods/HOC/withContext";

export class TimelineTerapis extends Component {
  _isMounted = false;
  constructor(props) {
    super(props);
    this.state = {
      listDaftar: [],
      nama_terapis: "",
      notification: "0"
    };
  }

  componentDidMount = () => {
    this._isMounted = true;
    listTerapis(this.props.getValue)
      .then(({ data }) => {
        if (this._isMounted) {
          this.setState({
            listDaftar: data,
            nama_terapis: data[0].nama_terapis
          });
        }
      })
      .catch(err => console.log(err, "err"));
  };

  componentWillMount() {
    this._isMounted = false;
  }

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
    return listDaftar.map((e, index) => (
      <tr key={e.uid}>
        <td>{index + 1}</td>
        <td>{new Date(e.waktu_checkup).toLocaleDateString("en-GB")}</td>
        <td>{e.nama_terapis}</td>
        <td>{e.nama_pasien}</td>
        <td>{e.subjektif}</td>
        <td>{e.objektif}</td>
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
            className="btn btn-sm"
            onClick={() => this.handleForm(e.uid)}
            data-toggle="modal"
            data-target="#notification1"
            style={{
              background: "#24a4d6"
            }}
          >
            Tambah
          </button>
        </td>
      </tr>
    ));
  };

  render() {
    return (
      <React.Fragment>
        <div ref={el => (this.componentRef = el)}>
          <table className="table">
            <thead>
              <tr>
                <th>No</th>
                <th>Tanggal</th>
                <th>Terapis</th>
                <th>Pasien</th>
                <th>subjektif</th>
                <th>Objektif</th>
                <th>Planning</th>
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
        <ReactToPrint
          trigger={() => (
            <a href={null}>
              <button className="btn btn-sm" style={{ background: "#24a4d6" }}>
                Save
              </button>
            </a>
          )}
          content={() => this.componentRef}
        />
      </React.Fragment>
    );
  }
}

export default withContext(TimelineTerapis);

import React, { Component } from "react";
import "../../../ASSETS/CSS/TambahPelayananAntrian.css";
import puyer from "../../../../Methods/Apotik/Puyer/Puyer";
import { Consumer } from "../../../../Methods/User/Auth/Store";
import ModalKonfirmasiTindakan from "../../Animasi/ModalKonfirmasiTindakan";
import ModalKonfirmasi from "../../Animasi/ModalKonfirmasi";

export class FormPuyer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notification: "0",
      nomor_rekam_medis: "",
      nama_racik: "",
      komposisi: "",
      nama_dokter: "",
      jumlah_racik: 0
    };
  }

  handleSave = (id_lokasi, nama) => {
    console.log("lokasi", id_lokasi);
    console.log("lokasi", nama);
    puyer({
      nomor_rekam_medis: this.props.no_rm,
      id_lokasi: id_lokasi,
      nama_dokter: nama,
      nama_racik: this.state.nama_racik,
      komposisi: this.state.komposisi,
      jumlah_racik: this.state.jumlah_racik
    })
      .then(this.setState({ notification: "1" }))
      .catch(err => {
        console.log(err);
        this.setState({ notification: "0" });
      });
  };

  render() {
    console.log("ini props nya", this.props.no_rm);

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-4 rowsoap">
                <div className="legendtitle">Nama Racik</div>
                <textarea
                  name="textarea"
                  className="textarea"
                  onChange={e =>
                    this.setState({
                      nama_racik: e.target.value
                    })
                  }
                />
              </div>
              <div className="col-md-4 rowsoap">
                <div className="legendtitle">Komposisi</div>
                <textarea
                  name="textarea"
                  className="textarea"
                  onChange={e =>
                    this.setState({
                      komposisi: e.target.value
                    })
                  }
                />
              </div>
              <div className="col-md-4 rowsoap">
                <div className="legendtitle">Jumlah Racik</div>
                <input
                  className="textarea"
                  type="number"
                  min="1"
                  max="10"
                  onChange={e =>
                    this.setState({
                      jumlah_racik: e.target.value
                    })
                  }
                  required
                />
              </div>
            </div>
          </div>
        </div>
        <Consumer>
          {({ state }) => (
            <div className="col-md-12">
              <div className="modal-footer justify-content-center">
                <button
                  className="btn btn-primary"
                  data-toggle="modal"
                  data-target="#konfirmasiRacik"
                  onClick={() =>
                    this.handleSave(
                      state.dataLogin.id_lokasi,
                      state.dataLogin.nama
                    )
                  }
                >
                  Simpan
                </button>
                <button
                  className="btn btn-warning"
                  data-toggle="modal"
                  data-target="#konfirmasiRacik"
                >
                  Bersihkan
                </button>
              </div>
            </div>
          )}
        </Consumer>

        {/* <Consumer>
          {({ state }) => (
            <ModalKonfirmasiTindakan
              passValue={() =>
                this.handleSave(state.dataLogin.nama, state.dataLogin.id_lokasi)
              }
              modal="notification1"
            />
          )}
        </Consumer> */}
        <ModalKonfirmasi
          notification={this.state.notification}
          modal="konfirmasiRacik"
        />
      </div>
    );
  }
}

export default FormPuyer;

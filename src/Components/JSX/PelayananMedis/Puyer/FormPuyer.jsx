import React, { Component } from "react";
import "../../../ASSETS/CSS/TambahPelayananAntrian.css";
import puyer from "../../../../Methods/Apotik/Puyer/Puyer";
import { Consumer } from "../../../../Methods/User/Auth/Store";
import ModalKonfirmasi from "../../Animasi/ModalKonfirmasi";

export class FormPuyer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notification: "0",
      nomor_rekam_medis: "",
      nama_racik: "",
      komposisi: "",
      jumlah_racik: 0
    };
  }

  handleSave = (nik, id_lokasi) => {
    puyer({
      nomor_rekam_medis: this.props.no_rm,
      id_lokasi: id_lokasi,
      nik_dokter: nik,
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

        <div className="col-md-12">
          <div className="modal-footer justify-content-center">
            <Consumer>
              {({ state }) => (
                <button
                  className="btn btn-primary"
                  data-toggle="modal"
                  data-target="#konfirmasiRacik"
                  onClick={() =>
                    this.handleSave(
                      state.dataLogin.nik,
                      state.dataLogin.id_lokasi
                    )
                  }
                >
                  Simpan
                </button>
              )}
            </Consumer>

            <button
              className="btn btn-warning"
              data-toggle="modal"
              data-target="#konfirmasiRacik"
            >
              Bersihkan
            </button>
          </div>
        </div>
        <ModalKonfirmasi
          notification={this.state.notification}
          modal="konfirmasiRacik"
        />
      </div>
    );
  }
}

export default FormPuyer;

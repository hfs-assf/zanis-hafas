import React, { Component } from "react";
import tambahAntrian from "../../../../Methods/Pendaftaran/Antrian/tambahAntrian";
import ModalKonfirmasi from "../../Animasi/ModalKonfirmasi";

class TambahAntrian extends Component {
  constructor(props) {
    super(props);
    this.handleSave = this.handleSave.bind(this);

    this.state = {
      showMe: false,
      antrian: {
        jaminan: "",
        nomor_rekam_medis: "",
        dokter: "",
        poli: "",
        notification: "0"
      }
    };
  }

  showHide = value => {
    this.setState({ showMe: value });
  };

  handleSave = () => {
    tambahAntrian({
      nomor_rekam_medis: this.props.pasien,
      poli: this.state.poli,
      jaminan: this.state.jaminan,
      dokter: this.state.dokter
    })
      .then(this.setState({ notification: "1" }))
      .catch(err => {
        console.log(err);
        this.setState({ notification: "0" });
      });
  };

  render() {
    return (
      <div className="card-box">
        <div className="flex-container">
          <div className="box column1">
            <h2 className="card-title text-left">
              Pendaftaran Pelayanan Medis
            </h2>
          </div>
        </div>
        <hr className="hr2" />
        <div className="form-group row">
          <label htmlFor="JenisPasien" className="col-sm-4 col-form-label">
            Jenis Pasien
            <span className="required">*</span>
          </label>
          <div className="col-sm-5">
            <select
              className="form-control"
              onChange={event =>
                this.setState({
                  jaminan: event.target.value
                })
              }
              required
            >
              <option value="">--- Pilihan ---</option>
              <option value="Umum">Umum</option>
              <option value="Asuransi BPJS">Asuransi BPJS</option>
              <option value="Lain-lain">Lain-lain</option>
            </select>
          </div>
        </div>

        <div className="form-group row">
          <label htmlFor="NamaDokter" className="col-sm-4 col-form-label">
            Nama Dokter
            <span className="required">*</span>
          </label>
          <div className="col-sm-5">
            <select
              className="form-control"
              onChange={event =>
                this.setState({
                  dokter: event.target.value
                })
              }
              required
            >
              <option value="">--- Pilihan ---</option>
              <option value="dr. Miaw">dr. Nurlailiyani</option>
            </select>
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="Poliklinik" className="col-sm-4 col-form-label">
            Poliklinik
            <span className="required">*</span>
          </label>
          <div className="col-sm-5">
            <select
              className="form-control"
              onChange={event =>
                this.setState({
                  poli: event.target.value
                })
              }
              required
            >
              <option value="">--- Pilihan ---</option>
              <option value="Poliklinik Umum">Poliklinik Umum</option>
              <option value="Poliklinik Gigi">Poliklinik Gigi</option>
            </select>
          </div>
        </div>

        <div className="col-md-12">
          <div className="modal-footer justify-content-center">
            <button
              className="btn btn-primary"
              data-toggle="modal"
              data-target="#konfirmasiAntrian"
              onClick={() => this.handleSave()}
            >
              Simpan
            </button>
          </div>
        </div>
        <ModalKonfirmasi
          notification={this.state.notification}
          modal="konfirmasiAntrian"
        />
      </div>
    );
  }
}
export default TambahAntrian;

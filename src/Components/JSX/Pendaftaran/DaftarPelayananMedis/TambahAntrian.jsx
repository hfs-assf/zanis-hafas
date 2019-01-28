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
        notification: ""
        // jenis_asuransi: "",
        // asuransi_no_kartu: ""
      }
    };
  }

  showHide(value) {
    this.setState({ showMe: value });
  }
  handleSave() {
    tambahAntrian({
      nomor_rekam_medis: this.props.pasien,
      poli: this.state.poli,
      jaminan: this.state.jaminan,
      dokter: this.state.dokter
      // jenis_asuransi: this.state.antrian.jenis_asuransi,
      // asuransi_no_kartu: this.state.antrian.asuransi_no_kartu
    })
      .then(this.setState({ notification: "1" }))
      .catch(err => {
        console.log(err);
        this.setState({ notification: "0" });
      });
    // console.log(this.state.jaminan);
  }

  render() {
    return (
      <form>
        <div className="flex-container">
          <div className="box column1">
            <h2 className="card-title text-left">
              Pendaftaran Pelayanan Medis
            </h2>
          </div>
        </div>
        <hr className="hr2" />
        {/* <div className="form-group row">
          <label htmlFor="inputjenispasien" className="col-sm-4 col-form-label">
            Jenis Pasien
            <span className="required">*</span>
          </label>
          <div className="col-sm-5 mt-1">
            <div className="custom-radios">
              <div>
                <input
                  type="radio"
                  id="color-1"
                  name="janispasien"
                  onClick={() => this.showHide(false)}
                  defaultChecked
                />
                <label htmlFor="color-1" className="radio-inline">
                  <span />
                </label>
                Umum
              </div>

              <div className="ml-2">
                <input
                  type="radio"
                  id="color-2"
                  name="janispasien"
                  onClick={() => this.showHide(true)}
                />
                <label htmlFor="color-2" className="radio-inline">
                  <span />
                </label>
                Asuransi / Jaminan
              </div>
            </div>
          </div>
        </div> */}
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
              <option value="dr. Miaw">dr. Miaw</option>
              <option value="dr. Kucing">dr. Kucing</option>
              <option value="dr. Suci">dr. Suci</option>
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
        {/* {this.state.showMe ? (
          <div className="animated fadeInRight">
            <h4>Asuransi / Jaminan</h4>
            <div className="form-group row">
              <label
                htmlFor="JenisAsuransi"
                className="col-sm-4 col-form-label"
              >
                Jenis Asuransi <span className="required">*</span>
              </label>
              <div className="col-sm-5">
                <select
                  className="form-control"
                  onChange={event =>
                    this.setState({
                      antrian: { jenis_asuransi: event.target.value }
                    })
                  }
                  required
                >
                  <option value="BRJS">BPJS</option>
                  <option value="Jamkesda">Jamkesda</option>
                </select>
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="KelasFaskes" className="col-sm-4 col-form-label">
                Nomor Kartu <span className="required">*</span>
              </label>
              <div className="col-sm-5">
                <input
                  type="text"
                  name="no_kartu"
                  className="form-control"
                  onChange={event =>
                    this.setState({
                      antrian: { asuransi_no_kartu: event.target.value }
                    })
                  }
                />
              </div>
            </div>
          </div>
        ) : null} */}
        <div className="col-md-12">
          <div className="modal-footer justify-content-center">
            <button
              className="btn btn-primary"
              data-toggle="modal"
              data-target="#notification"
              onClick={() => this.handleSave()}
            >
              Simpan
            </button>
          </div>
        </div>
        <ModalKonfirmasi notification={this.state.notification} />
      </form>
    );
  }
}
export default TambahAntrian;

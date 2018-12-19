import React, { Component } from "react";
import tambahAntrian from "../../../../Methods/Pendaftaran/tambahAntrian";

class TambahAntrian extends Component {
  constructor() {
    super();
    this.state = {
      showMe: false,
      antrian: {
        no_rm: "z",
        layanan_medis: "z",
        nama_dokter: "z",
        poliklinik: "z",
        tanggal_masuk: "z",
        asuransi_kelas: "z",
        asuransi_faskes: "z",
        asuransi_no_kartu: "z",
        asuransi_tanggal_valid: "z"
      }
    };
  }
  componentWillMount() {
    this.setState({
      no_rm: this.props.antrian
    });
    // console.log("obj antrian :" + this.state.antrian);
  }

  showHide(value) {
    this.setState({ showMe: value });
  }
  simpan() {
    // alert("obj antrian :" + this.state.antrian);

    tambahAntrian({
      no_rm: this.state.antrian.no_rm,
      layanan_medis: this.state.antrian.layanan_medis,
      nama_dokter: this.state.antrian.nama_dokter,
      poliklinik: this.state.antrian.poliklinik,
      tanggal_masuk: this.state.antrian.tanggal_masuk,
      asuransi_faskes: this.state.antrian.asuransi_faskes,
      asuransi_kelas: this.state.antrian.asuransi_kelas,
      asuransi_no_kartu: this.state.antrian.asuransi_no_kartu,
      asuransi_tanggal_valid: this.state.antrian.asuransi_tanggal_valid
    });
  }
  kembali() {
    window.location.assign("/pendaftaran");
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
        <div className="form-group row">
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
                  value="color-1"
                  onClick={() => this.showHide(false)}
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
                  value="color-2"
                  onClick={() => this.showHide(true)}
                />
                <label htmlFor="color-2" className="radio-inline">
                  <span />
                </label>
                Asuransi / Jaminan
              </div>
            </div>
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="LayananMedis" className="col-sm-4 col-form-label">
            Layanan Medis
            <span className="required">*</span>
          </label>
          <div className="col-sm-5">
            <select
              className="form-control"
              onChange={event =>
                this.setState({
                  antrian: { layanan_medis: event.target.value }
                })
              }
              required
            >
              <option>Rawat Jalan</option>
              <option>Laboratorium</option>
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
                  antrian: { nama_dokter: event.target.value }
                })
              }
              required
            >
              <option>dr. Miaw</option>
              <option>dr. Kucing</option>
              <option>dr. Suci</option>
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
                  antrian: { poliklinik: event.target.value }
                })
              }
              required
            >
              <option>Umum</option>
              <option>Gigi</option>
            </select>
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="TanggalMasuk" className="col-sm-4 col-form-label">
            Tanggal Masuk
            <span className="required">*</span>
          </label>
          <div className="col-sm-5">
            <input
              type="date"
              className="form-control"
              placeholder="L"
              onChange={event =>
                this.setState({
                  antrian: { tanggal_masuk: event.target.value }
                })
              }
              required
            />
          </div>
        </div>
        {this.state.showMe ? (
          <div className="animated fadeInRight">
            <h4>Asuransi / Jaminan</h4>
            <div className="form-group row">
              <label htmlFor="KelasFaskes" className="col-sm-4 col-form-label">
                Kelas <span className="required">*</span>
              </label>
              <div className="col-sm-5">
                <input
                  type="text"
                  name="kelas"
                  className="form-control"
                  onChange={event =>
                    this.setState({
                      antrian: { asuransi_kelas: event.target.value }
                    })
                  }
                />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="KelasFaskes" className="col-sm-4 col-form-label">
                Faskes
                <span className="required">*</span>
              </label>
              <div className="col-sm-5">
                <input
                  type="text"
                  name="faskes"
                  className="form-control"
                  onChange={event =>
                    this.setState({
                      antrian: { asuransi_faskes: event.target.value }
                    })
                  }
                />
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
            <div className="form-group row">
              <label htmlFor="KelasFaskes" className="col-sm-4 col-form-label">
                Tanggal Valid
                <span className="required">*</span>
              </label>
              <div className="col-sm-5">
                <input
                  type="date"
                  name="tanggal_valid"
                  className="form-control"
                  onChange={event =>
                    this.setState({
                      antrian: { asuransi_tanggal_valid: event.target.value }
                    })
                  }
                />
              </div>
            </div>
          </div>
        ) : null}
        <div className="col-md-12">
          <div className="modal-footer justify-content-center">
            <button className="btn btn-primary" onClick={() => this.simpan()}>
              Simpan
            </button>
            <button
              className="btn btn-outline-primary"
              onClick={() => this.kembali()}
            >
              Kembali
            </button>
          </div>
        </div>
      </form>
    );
  }
}
export default TambahAntrian;

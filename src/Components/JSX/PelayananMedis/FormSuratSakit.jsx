import React, { Component } from "react";
import jsPDF from "jspdf";
import detailPasien from "../../../Methods/RekamMedis/Pasien/detailPasien";

class FormObat extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      no_rm: "",
      nama_pasien: "",
      tanggal_lahir: "",
      alamat: ""
    };
  }

  componentWillMount() {
    detailPasien(this.props.id).then(({ data }) => {
      this.setState({
        nama_pasien: data[0].nama_pasien,
        tanggal_lahir: data[0].tanggal_lahir,
        alamat: data[0].alamat
      });
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    var doc = new jsPDF({
      orientation: "l",
      unit: "cm",
      format: "a5",
      margin: [1, 1, 1, 1]
    });

    doc.setFontSize(24);
    doc.text("Surat Sakit", 1, 1);

    doc.setFontSize(12);

    doc.text("Yang bertanda tangan dibawah ini,", 1, 2);
    doc.text("Dokter \t\t:", 2, 3);
    doc.text("Menerangkan bahwa, ", 1, 4);
    doc.text("Nama \t\t:" + form.elements["nama"].value, 2, 5);
    doc.text("Umur \t\t:" + form.elements["umur"].value, 2, 6);
    doc.text("Alamat \t:" + form.elements["alamat"].value, 2, 7);
    doc.text(
      "Karena keadaan sakitnya yang bersangkutan diharapkan beristirahat selama 2 hari terhitung",
      1,
      8
    );
    doc.text(
      "tanggal " +
        form.elements["dari_tanggal"].value +
        " hingga " +
        form.elements["hingga_tanggal"].value +
        ".",
      1,
      9
    );
    doc.text("Diagnosis :  " + form.elements["diagnosis"].value, 1, 10);
    doc.text("Harap yang berkepentingan maklum.", 1, 11);
    doc.save(form.elements["nama"].value + ".pdf");
  }

  calculateAge(date) {
    var today = new Date();
    var birthDate = new Date(date);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }

  render() {
    return (
      <div
        className="modal fade right"
        id="sickleaveletter"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="myModalLabel"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-full-height modal-right"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header info-color white-text text-center py-4">
              <h4 className="modal-title w-100" id="myModalLabel">
                Cetak Surat Sakit
              </h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true" className="white-text">
                  &times;
                </span>
              </button>
            </div>
            <form className="modal-body" onSubmit={this.handleSubmit}>
              <div className="row">
                <div className="col-md-12">
                  <div className="md-form mb-0">
                    <input
                      type="text"
                      name="nama"
                      value={this.state.nama_pasien}
                      className="form-control"
                      readOnly
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="md-form mb-0">
                    <input
                      type="text"
                      name="umur"
                      className="form-control"
                      value={
                        this.calculateAge(this.state.tanggal_lahir) + " tahun"
                      }
                      readOnly
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="md-form mb-0">
                    <input
                      type="text"
                      name="alamat"
                      className="form-control"
                      value={this.state.alamat}
                      readOnly
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="md-form mb-0">
                    <span>Dari Tanggal </span>

                    <input
                      type="date"
                      name="dari_tanggal"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="md-form mb-0">
                    <span>Hingga Tanggal</span>

                    <input
                      type="date"
                      name="hingga_tanggal"
                      className="form-control"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="md-form mb-0">
                    <span>Diagnosis</span>
                    <input
                      type="text"
                      name="diagnosis"
                      className="form-control"
                    />
                  </div>
                </div>
              </div>
              <div className="modal-footer justify-content-center">
                <button className="btn btn-info">Cetak</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default FormObat;

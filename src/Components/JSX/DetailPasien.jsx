import React, { Component } from "react";
import detailPasien from "../../Methods/RekamMedis/Pasien/detailPasien";
import listAntrian from "../../Methods/Pendaftaran/Antrian/listAntrian";
class DetailPasien extends Component {
  constructor(props) {
    super(props);
    this.calculateAge = this.calculateAge.bind(this);
    this.state = {
      no_rm: "",
      nama_pasien: "",
      tanggal_lahir: "",
      poli: "",
      jaminan: "",
      dokter: ""
    };
  }
  componentWillMount() {
    listAntrian(this.props.antrian_pasien).then(({ data }) => {
      this.setState({
        poli: data[0].poli,
        no_rm: data[0].nomor_rekam_medis,
        jaminan: data[0].jaminan,
        dokter: data[0].dokter
      });
    });

    detailPasien(this.props.no_rm).then(({ data }) => {
      this.setState({
        nama_pasien: data[0].nama_pasien,
        tanggal_lahir: data[0].tanggal_lahir
      });
    });
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
      <div>
        <table>
          <tbody>
            <tr>
              <td>Nomor RM </td>
              <td className="datatable">
                :&ensp;
                {this.state.no_rm}
              </td>
            </tr>
            <tr>
              <td>Nama</td>
              <td className="datatable">
                :&ensp;
                {this.state.nama_pasien} (
                {this.calculateAge(this.state.tanggal_lahir)} tahun)
              </td>
            </tr>
            <tr>
              <td>Poli</td>
              <td className="datatable">
                :&ensp;
                {this.state.poli}
              </td>
            </tr>
            <tr>
              <td>Dokter</td>
              <td className="datatable">
                :&ensp;
                {this.state.dokter}
              </td>
            </tr>
            <tr>
              <td>Jaminan</td>
              <td className="datatable">
                :&ensp;
                {this.state.jaminan}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default DetailPasien;

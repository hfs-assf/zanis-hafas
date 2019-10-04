import React, { Component } from "react";
import detailPasien from "../../Methods/RekamMedis/Pasien/detailPasien";
import { listAntrian } from "../../Methods/Pendaftaran/Antrian/listAntrian";
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
      dokter: "",
      lAntrian: [],
      gender: ""
    };
  }

  componentDidMount() {
    listAntrian(this.props.antrian_pasien)
      .then(({ data }) => {
        const filter = data.filter(e => e.uid === this.props.antrian_pasien);
        this.setState({
          poli: filter[0].poli,
          jaminan: filter[0].jaminan,
          dokter: filter[0].dokter
        });
      })
      .catch(err => console.log(err));

    detailPasien(this.props.no_rm).then(({ data }) => {
      this.setState({
        nama_pasien: data[0].nama_pasien,
        tanggal_lahir: data[0].tanggal_lahir,
        gender: data[0].jenis_kelamin
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
              <td>Nomor Rekam Medis </td>
              <td className="datatable">
                :&ensp;
                {this.props.no_rm}
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
              <td>Jenis Kelamin</td>
              <td className="datatable">
                :&ensp;
                {this.state.gender}
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

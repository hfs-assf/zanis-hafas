import React, { Component } from "react";
import listPesananObat from "../../../Methods/Apotik/PesananObat/listPesananObat";
export class ProfilePesanan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nama_pasien: "",
      tanggal_lahir: "",
      no_rm: "",
      nik_dokter: "",
      list: []
    };
  }
  componentDidMount = () => {
    listPesananObat("MENUNGGU", this.props.uid).then(({ data }) => {
      const filter = data.filter(e => e.uid === this.props.uid);
      this.setState({
        nama_pasien: filter[0].nama_pasien,
        tanggal_lahir: filter[0].tanggal_lahir,
        nik_dokter: filter[0].nik_dokter
      });
    });
  };

  calculateAge = date => {
    var today = new Date();
    var birthDate = new Date(date);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

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
              <td>Dokter</td>
              <td className="datatable">
                :&ensp;
                {this.state.nik_dokter}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default ProfilePesanan;

import React, { Component } from "react";
import detailPasien from "../../Methods/RekamMedis/Pasien/detailPasien";

class DetailPasien extends Component {
  constructor(props) {
    super(props);
    this.calculateAge = this.calculateAge.bind(this);
    this.state = {
      no_rm: "",
      nama_pasien: "",
      tanggal_lahir: "",
      poli: "",
      jaminan: ""
    };
  }

  componentWillMount() {
    detailPasien(this.props.id).then(({ data }) => {
      this.setState({
        no_rm: data[0].nomor_rekam_medis,
        nama: data[0].nama_pasien,
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
                {this.state.nama} ({this.calculateAge(this.state.tanggal_lahir)}{" "}
                tahun)
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

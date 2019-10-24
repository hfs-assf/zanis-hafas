import React, { Component } from "react";
import detailPasien from "../../Methods/RekamMedis/Pasien/detailPasien";
import { listAntrian } from "../../Methods/Pendaftaran/Antrian/listAntrian";
import { withContext } from "../../Methods/HOC/withContext";
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
    const no_rm = this.props.no_rm;
    const id_lokasi = this.props.getValue;
    detailPasien(no_rm, id_lokasi)
      .then(({ data }) => {
        const filter = data.filter(e => e.nomor_rekam_medis === no_rm);
        this.setState({
          nama_pasien: filter[0].nama_pasien,
          tanggal_lahir: filter[0].tanggal_lahir,
          gender: filter[0].jenis_kelamin
        });
      })
      .catch(err => err);

    listAntrian(id_lokasi, this.props.antrian_pasien)
      .then(({ data }) => {
        const filter = data.filter(e => e.uid === this.props.antrian_pasien);
        this.setState({
          poli: filter[0].poli,
          jaminan: filter[0].jaminan,
          dokter: filter[0].dokter
        });
      })
      .catch(err => err);
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

export default withContext(DetailPasien);

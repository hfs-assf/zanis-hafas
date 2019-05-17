import React, { Component } from "react";
import listTransaksi from "../../Methods/Kasir/listTransaksi";
import detailPasien from "../../Methods/RekamMedis/Pasien/detailPasien";

class DetailPasienKasir extends Component {
  constructor(props) {
    super(props);
    this.state = {
      no_rm: "",
      nama_pasien: "",
      tanggal_lahir: "",
      penjamin: ""
    };
  }
  componentWillReceiveProps = nextProps => {
    listTransaksi(nextProps.no_rm).then(({ data }) => {
      this.setState({
        no_rm: data[0].nomor_rekam_medis,
        penjamin: data[0].penjamin
      });
    });

    detailPasien(nextProps.no_rm).then(({ data }) => {
      this.setState({
        nama_pasien: data[0].nama_pasien,
        tanggal_lahir: data[0].tanggal_lahir
      });
    });
  };

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
      <React.Fragment>
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
              <td>Jaminan</td>
              <td className="datatable">
                :&ensp;
                {this.state.penjamin}
              </td>
            </tr>
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default DetailPasienKasir;

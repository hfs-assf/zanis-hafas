import React, { Component } from "react";
import pasienList from "../../JSON/pasien";
import keteranganPasien from "../../JSON/antrianPasien";

class DetailPasien extends Component {
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
    let deskripsiPasien, ket;
    const pasien = pasienList.filter(antrian => {
      return antrian.id.toString().indexOf(this.props.id) !== -1;
    });
    if (pasien.length !== 0) {
      deskripsiPasien = pasien.map(pasien => {
        ket = keteranganPasien.find(e => e.no_rm === pasien.no_rm);
        return (
          <table key={pasien.id}>
            <tbody>
              <tr>
                <td>Nomor RM </td>
                <td className="datatable">
                  :&ensp;
                  {pasien.no_rm}
                </td>
              </tr>
              <tr>
                <td>Nama</td>
                <td className="datatable">
                  :&ensp;
                  {pasien.nama} ({this.calculateAge(pasien.tanggal_lahir)}{" "}
                  tahun)
                </td>
              </tr>
              <tr>
                <td>Poli</td>
                <td className="datatable">
                  :&ensp;
                  {ket.tujuan}
                </td>
              </tr>
              <tr>
                <td>Asuransi</td>
                <td className="datatable">
                  :&ensp;
                  {ket.asuransi}
                </td>
              </tr>
            </tbody>
          </table>
        );
      });
    }
    return <div>{deskripsiPasien}</div>;
  }
}

export default DetailPasien;

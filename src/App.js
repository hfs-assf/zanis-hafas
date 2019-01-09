import React, { Component } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";

import Login from "./Views/JSX/Login/Login";
import Header from "./Views/JSX/Header/Header";
import Sidebar from "./Views/JSX/Sidebar/Sidebar";
import Dashboard from "./Views/JSX/DashboardUser/Dashboard";
import Profil from "./Components/JSX/UbahProfil";
import TampilanTV from "./Views/JSX/TampilanTV/Antrian";
// Admin
import Admin from "./Views/JSX/Admin/Dashboard";
import KelolaItemLaboratorium from "./Views/JSX/Admin/KelolaItemLaboratorium";
import KelolaKaryawan from "./Views/JSX/Admin/KelolaKaryawan";
import KelolaPoliklinik from "./Views/JSX/Admin/KelolaPoliklinik";
import KelolaTindakan from "./Views/JSX/Admin/KelolaTindakan";
import ProfilKlinik from "./Views/JSX/Admin/ProfilKlinik";

// Apotek
import DetailObat from "./Views/JSX/Apotek/DetailObat";
import KelolaApotek from "./Views/JSX/Apotek/KelolaApotek";
import Apotek from "./Views/JSX/Apotek/TimelineApotek";

// Kasir
import Pembayaran from "./Views/JSX/Kasir/Pembayaran";
import Kasir from "./Views/JSX/Kasir/TimelineKasir";

// Pelayanan Medis
import DaftarRekamMedis from "./Views/JSX/PelayananMedis/RekamMedis/DaftarRekamMedis";
import DetailRekamMedis from "./Views/JSX/PelayananMedis/RekamMedis/DetailRekamMedis";
import PelayananMedis from "./Views/JSX/PelayananMedis/PelayananMedis";
import TimelinePelayananMedis from "./Views/JSX/PelayananMedis/TimelinePelayananMedis";

//Pendaftaran
import Pendaftaran from "./Views/JSX/Pendaftaran/Pendaftaran";
import PendaftaranLayanan from "./Views/JSX/Pendaftaran/PendaftaranLayanan";

//Akunting
import Akunting from "./Views/JSX/Akunting/ViewJurnal";
import DaftarAkun from "./Views/JSX/Akunting/ViewDaftarAkun";
import SaldoAwal from "./Views/JSX/Akunting/ViewSaldoAwal";
// import ListAsuransi from "./Views/JSX/Akunting/ViewAsuransi";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Profil />
        <Route path="/tampilantv" component={TampilanTV} />
        <Route path="/login" component={Login} />

        <Sidebar />
        <div className="containercontent">
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/apotek" component={Apotek} />
            <Route path="/kasir" component={Kasir} />
            <Route
              path="/form-pembayaran/:id"
              render={({ match }) => <Pembayaran antrian={match.params} />}
            />
            <Route
              path="/detail-obat/:id"
              render={({ match }) => <DetailObat uid={match.params} />}
            />
            <Route path="/kelola_apotek" component={KelolaApotek} />
            <Route path="/pendaftaran" component={Pendaftaran} />
            <Route
              path="/tambah-layanan/:id"
              render={({ match }) => (
                <PendaftaranLayanan antrian={match.params} />
              )}
            />
            <Route
              path="/pelayanan-medis/:id"
              render={({ match }) => <PelayananMedis antrian={match.params} />}
            />
            <Route path="/pelayanan-medis" component={TimelinePelayananMedis} />
            <Route path="/admin" component={Admin} />
            <Route path="/karyawan" component={KelolaKaryawan} />
            <Route path="/poliklinik" component={KelolaPoliklinik} />
            <Route path="/tindakan" component={KelolaTindakan} />
            <Route path="/profil-klinik" component={ProfilKlinik} />
            <Route
              path="/peralatan-laboratorium"
              component={KelolaItemLaboratorium}
            />
            <Route path="/rekam_medis" component={DaftarRekamMedis} />
            <Route path="/detail_rekam_medis" component={DetailRekamMedis} />
            {/* <Route
              path="/data_rekam_medis_pasien"
              component={DataRekamMedisPasien}
            /> */}
            <Route path="/akunting" component={Akunting} />
            <Route path="/daftar-akun" component={DaftarAkun} />
            <Route path="/saldo-awal" component={SaldoAwal} />
            {/* <Route path="/list-asuransi" component={ListAsuransi} /> */}
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;

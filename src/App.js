import React, { Component } from "react";
import "./App.css";
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";
import { Store, Consumer } from "./Methods/User/Auth/Store";
import ProtectedRoute from "./Methods/User/Auth/protectRoute";

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
import KelolaObat from "./Views/JSX/Apotek/KelolaObat";
import TransaksiObat from "./Views/JSX/Apotek/TransaksiOBat";
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
import BukuBesar from "./Views/JSX/Akunting/ViewBukuBesar";
import SaldoAwal from "./Views/JSX/Akunting/ViewSaldoAwal";
// import ListAsuransi from "./Views/JSX/Akunting/ViewAsuransi";

class App extends Component {
  render() {
    return (
      <Store>
        <BrowserRouter>
          <div>
            <Consumer>
              {({ state }) => (
                <div>
                  {console.log("ini status", state.auth)}
                  {state.auth ? <Redirect exact to="/dashboard" /> : null}
                </div>
              )}
            </Consumer>
            <Header />
            <Profil />
            <Route path="/tampilantv" component={TampilanTV} />
            <Route exact path="/" component={Login} />
            <Sidebar />
            <div className="containercontent">
              <Switch>
                <ProtectedRoute exact path="/dashboard" component={Dashboard} />
                <ProtectedRoute path="/apotek" component={Apotek} />
                <ProtectedRoute path="/kasir" component={Kasir} />
                <ProtectedRoute
                  path="/form-pembayaran/:id/:no_rm"
                  render={({ match }) => <Pembayaran antrian={match.params} />}
                />
                <ProtectedRoute
                  path="/detail-obat/:id"
                  render={({ match }) => <DetailObat uid={match.params} />}
                />
                <ProtectedRoute path="/kelola-obat" component={KelolaObat} />
                <ProtectedRoute
                  path="/transaksi-obat"
                  component={TransaksiObat}
                />
                <ProtectedRoute path="/pendaftaran" component={Pendaftaran} />
                <ProtectedRoute
                  path="/tambah-layanan/:id"
                  render={({ match }) => (
                    <PendaftaranLayanan antrian={match.params} />
                  )}
                />
                <ProtectedRoute
                  path="/pelayanan-medis/:id/:no_rm"
                  render={({ match }) => (
                    <PelayananMedis antrian={match.params} />
                  )}
                />
                <ProtectedRoute
                  path="/pelayanan-medis"
                  component={TimelinePelayananMedis}
                />
                <ProtectedRoute path="/admin" component={Admin} />
                <ProtectedRoute path="/karyawan" component={KelolaKaryawan} />
                <ProtectedRoute
                  path="/poliklinik"
                  component={KelolaPoliklinik}
                />
                <ProtectedRoute path="/tindakan" component={KelolaTindakan} />
                <ProtectedRoute
                  path="/profil-klinik"
                  component={ProfilKlinik}
                />
                <ProtectedRoute
                  path="/peralatan-laboratorium"
                  component={KelolaItemLaboratorium}
                />
                <ProtectedRoute
                  path="/rekam-medis"
                  component={DaftarRekamMedis}
                />
                <ProtectedRoute
                  path="/detail-rekam-medis/:id"
                  render={({ match }) => (
                    <DetailRekamMedis pasien={match.params} />
                  )}
                />
                <ProtectedRoute path="*" component={Login}/>
                {/* <Route
              path="/data_rekam_medis_pasien"
              component={DataRekamMedisPasien}
            /> */}
                <ProtectedRoute path="/jurnal-umum" component={Akunting} />
                <ProtectedRoute path="/daftar-akun" component={DaftarAkun} />
                <ProtectedRoute path="/buku-besar" component={BukuBesar} />
                <ProtectedRoute path="/saldo-awal" component={SaldoAwal} />
                {/* <Route path="/list-asuransi" component={ListAsuransi} /> */}
              </Switch>
            </div>
          </div>
        </BrowserRouter>
      </Store>
    );
  }
}

export default App;

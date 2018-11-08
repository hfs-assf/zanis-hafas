import React, { Component } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Dashboard from "./Component/JSX/DashboardHome/Dashboard";
// Admin
import Admin from "./Component/JSX/Admin/Dashboard";
import KelolaKaryawan from "./Component/JSX/Admin/KelolaKaryawan";
import KelolaPoliklinik from "./Component/JSX/Admin/KelolaPoliklinik";
import KelolaAdminBiaya from "./Component/JSX/Admin/KelolaBiaya";
// admin
import Login from "./Component/JSX/Login/Login";
import Header from "./Component/JSX/Header/Header";
import Sidebar from "./Component/JSX/Sidebar/Sidebar";
import Apotek from "./Component/JSX/Apotek/TimelineApotek";
import KelolaApotek from "./Component/JSX/Apotek/KelolaApotek";
import Pendaftaran from "./Component/JSX/Pendaftaran/Pendaftaran";
import PendaftaranLayanan from "./Component/JSX/Pendaftaran/TambahPelayananAntrian";
import TimelinePelayananMedis from "./Component/JSX/PelayananMedis/TimelinePelayananMedis";
import PelayananMedisForm from "./Component/JSX/PelayananMedis/PelayananMedis";
import Kasir from "./Component/JSX/Kasir/TimelineKasir";
import Pembayaran from "./Component/JSX/Kasir/Pembayaran";
// RekamMedisPasien
import RekamMedisPasien from "./Component/JSX/PelayananMedis/RekamMedisPasien";
import ListRekamMedis from "./Component/JSX/PelayananMedis/RekamMedislist";
import DetailRekamMedis from "./Component/View/RekamMedis/DetailRekamMedis";
// import KelolaBiaya from "./Component/JSX/Kasir/KelolaBiaya";
import FakeData from "./JSON/pasien.json";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Route path="/login" component={Login} />

        <Sidebar />
        <div className="containercontent">
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/apotek" component={Apotek} />
            <Route path="/kasir" component={Kasir} />
<<<<<<< HEAD
            <Route
              path="/form-pembayaran/:id"
              render={({ match }) => (
                <Pembayaran {...FakeData.find(x => x.id === match.params.id)} />
              )}
            />
            {/* <Route path="/kelola_biaya" component={KelolaApotek} /> */}
=======
            <Route path="/form-pembayaran" component={Pembayaran} />
>>>>>>> 370383111560c3aa21bbfb1eacb066421a793635
            <Route path="/kelola_apotek" component={KelolaApotek} />
            <Route path="/pendaftaran" component={Pendaftaran} />
            <Route
              path="/tambahlayanan/:id"
              render={({ match }) => (
                <PendaftaranLayanan antrian={match.params} />
              )}
            />
            <Route
              path="/formpelayananmedis/:id"
              render={({ match }) => (
                <PelayananMedisForm antrian={match.params} />
              )}
            />
            <Route path="/pelayanan-medis" component={TimelinePelayananMedis} />
            <Route path="/admin" component={Admin} />
            <Route path="/karyawan" component={KelolaKaryawan} />
            <Route path="/poliklinik" component={KelolaPoliklinik} />
            <Route path="/biayatindakan" component={KelolaAdminBiaya} />
            <Route path="/rekam_medispasien" component={RekamMedisPasien} />
            <Route path="/lisrm" component={ListRekamMedis} />
            <Route path="/detailrekammedis" component={DetailRekamMedis} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;

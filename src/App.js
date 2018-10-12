import React, { Component } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Dashboard from "./Component/JSX/DashboardHome/Dashboard";
import Login from "./Component/JSX/Login/Login";
import Header from "./Component/JSX/Header/Header";
import Sidebar from "./Component/JSX/Sidebar/Sidebar";
import Apotek from "./Component/JSX/Apotek/TimelineApotek";
import KelolaApotek from "./Component/JSX/Apotek/KelolaApotek";
import Pendaftaran from "./Component/JSX/Pendaftaran/Pendaftaran";
import PendaftaranLayanan from "./Component/JSX/Pendaftaran/TambahPelayananAntrian";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Sidebar />
        <div className="containercontent">
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/login" component={Login} />
            <Route path="/apotek" component={Apotek} />
            <Route path="/kelola_apotek" component={KelolaApotek} />
            <Route path="/pendaftaran" component={Pendaftaran} />
            <Route path="/tambahlayanan" component={PendaftaranLayanan} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;

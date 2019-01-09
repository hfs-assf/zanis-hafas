import React, { Component } from "react";
import DaftaraAkun from "../../../Components/JSX/Akunting/DaftarAkun";
// import Preloaders from "../Preloader/Preloader";
class ViewDaftarAkun extends Component {
  render() {
    return (
      <div className="container-fluid">
        <DaftaraAkun />
        {/* <Preloaders /> */}
      </div>
    );
  }
}

export default ViewDaftarAkun;

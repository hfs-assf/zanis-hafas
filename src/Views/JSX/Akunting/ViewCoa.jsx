import React, { Component } from "react";
import COA from "../../../Components/JSX/MenuAkunting/COA";
// import Preloaders from "../Preloader/Preloader";
class ViewChartOfAccount extends Component {
  render() {
    return (
      <div className="container-fluid">
        <COA />
        {/* <Preloaders /> */}
      </div>
    );
  }
}

export default ViewChartOfAccount;

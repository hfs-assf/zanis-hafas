import React, { Component } from "react";
import ProfileRM from "../../../../Components/JSX/PelayananMedis/RekamMedis/ProfileRM";
import RiwayatRM from "../../../../Components/JSX/PelayananMedis/RekamMedis/RiwayatRM";

class RekamMedisList extends Component {
  render() {
    return (
      <div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-12 hidden-sm hidden-xs">
              <ProfileRM pasien={this.props.pasien.id} />
              <RiwayatRM pasien={this.props.pasien.id} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RekamMedisList;

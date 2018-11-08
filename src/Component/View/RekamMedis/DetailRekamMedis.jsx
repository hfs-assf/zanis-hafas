import React, { Component } from "react";
import LogosZainab from "../../../img/zainablogos.png";
import "../../CSS/DetailRekamMedis.css";

class DetailRekamMedis extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row garis">
          <div className="col-md-6 logos">
            <img className="img-fluid" src={LogosZainab} />
            <div className="judulrm">ASESMEN REKAM MEDIS</div>
          </div>
          <div className="col-md-5 datadiri">
            <div className="Table">
              <div className="Row">
                <div className="Cell">
                  <p>Nama</p>
                </div>
                <div className="Cell">
                  <p>: Kurnianto Syaputra</p>
                </div>
              </div>
              <div className="Row">
                <div className="Cell">
                  <p>Tanggal Lahir</p>
                </div>
                <div className="Cell">
                  <p>: 17 Oktober 1993</p>
                </div>
              </div>
              <div className="Row">
                <div className="Cell">
                  <p>Jenis Kelamin</p>
                </div>
                <div className="Cell">
                  <p>: Laki-Laki</p>
                </div>
              </div>
              <div className="Row">
                <div className="Cell">
                  <p>Nomor RM</p>
                </div>
                <div className="Cell">
                  <p>: 1010102010</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="font">
          <div className="Table">
            <div className="Row">
              <div className="Cell">
                <p>Tanggal</p>
              </div>
              <div className="Cell">
                <p>: 6 November 2018</p>
              </div>
              <div className="Cell">
                <p>, Jam</p>
              </div>
              <div className="Cell">
                <p>12.00 WIB</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row triase">
          <div className="col-md-12 datatriase">
            <p>I. &nbsp; TRIASE DIISI OLEH DOKTER</p>
            <div className="Table isitriase">
              <div className="Row">
                <div className="Cell">
                  <p>Keluhan Utama</p>
                </div>
                <div className="Cell">
                  <p>: Pusing Kepala , Migrain </p>
                </div>
              </div>
              <div className="Row">
                <div className="Cell">
                  <p>Tanda - Tanda Vital</p>
                </div>
                <div className="Cell">
                  <p>: GCS </p>
                </div>
                <div className="Cell">
                  <p>: Eye </p>
                </div>
                <div className="Cell">
                  <p>: 12 </p>
                </div>
                <div className="Cell">
                  <p>, Motorik </p>
                </div>
                <div className="Cell">
                  <p>: 18 </p>
                </div>
                <div className="Cell">
                  <p>, Pupil </p>
                </div>
                <div className="Cell">
                  <p>: 18 mm/ 10 mm </p>
                </div>
                <div className="Cell">
                  <p>, Refleks Cahaya </p>
                </div>
                <div className="Cell">
                  <p>: 10 / 10 </p>
                </div>
                <div className="Cell">
                  <p>, Tekanan Darah </p>
                </div>
                <div className="Cell">
                  <p>: 10 / 10 mmHg </p>
                </div>
              </div>
              <div className="Row">
                <div className="Cell" />
                <div className="Cell">
                  <p>Nadi</p>
                </div>
                <div className="Cell">
                  <p>: 10 kali/menit reguler/irreguler</p>
                </div>
                <div className="Cell">
                  <p>, Suhu</p>
                </div>
                <div className="Cell">
                  <p>: 10 C</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DetailRekamMedis;

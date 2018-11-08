import React, { Component } from "react";
import { Link } from "react-router-dom";
import SVGKalender from "../../svgfile/Kalender";
import "../../CSS/option.css";

class ViewRekamMedisList extends Component {
  render() {
    return (
      <div id="demo">
        <div class="alert alert-danger" role="alert">
          Untuk melihat MR pasien <strong>Arahkan kursor</strong> ke salah satu
          tahun <strong>Lalu Klik</strong>
        </div>
        <ul className="tree-menu">
          <li>
            <input id="demo1-1" name="demo1-1" type="checkbox" />
            <SVGKalender />
            <label for="demo1-1">2017</label>
            <ul>
              <li>
                <input id="demo1-1-2" name="demo1-1-2" type="checkbox" />
                <label for="demo1-1-2">Oktober</label>
                <ul>
                  <li>
                    <Link target="_blank" to="/rekammedispasien">
                      17 Oktober 2017
                    </Link>
                  </li>
                  <li>
                    <Link target="_blank" to="/rekammedispasien">
                      20 Oktober 2017
                    </Link>
                  </li>
                  <li>
                    <Link target="_blank" to="/rekammedispasien">
                      31 Oktober 2017
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
            <ul>
              <li>
                <input id="demo1-1-3" name="demo1-1-2" type="checkbox" />
                <label for="demo1-1-3">Desember</label>
                <ul>
                  <li>
                    <Link target="_blank" to="/rekammedispasien">
                      17 Desember 2017
                    </Link>
                  </li>
                  <li>
                    <Link target="_blank" to="/rekammedispasien">
                      20 Desember 2017
                    </Link>
                  </li>
                  <li>
                    <Link target="_blank" to="/rekammedispasien">
                      31 Desember 2017
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <input id="demo1-2" name="demo1-2" type="checkbox" />
            <SVGKalender />
            <label for="demo1-2">2018</label>
            <ul>
              <li>
                <input id="demo1-2-1" name="demo1-2-1" type="checkbox" />
                <label for="demo1-2-1">Januari</label>
                <ul>
                  <li>
                    <Link target="_blank" to="/rekammedispasien">
                      17 Januari 2018
                    </Link>
                  </li>
                  <li>
                    <Link target="_blank" to="/rekammedispasien">
                      20 Januari 2018
                    </Link>
                  </li>
                  <li>
                    <Link target="_blank" to="/rekammedispasien">
                      31 Januari 2018
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    );
  }
}

export default ViewRekamMedisList;

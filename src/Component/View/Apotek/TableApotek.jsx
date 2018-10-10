import React, { Component } from "react";
import "../../CSS/Apotek.css";

class TableApotek extends Component {
  render() {
    return (
      <table
        id="dtVerticalScrollExample"
        className="table table-striped table-bordered table-sm mt-5"
        cellspacing="0"
        width="100%"
      >
        <thead>
          <tr>
            <th className="th-sm">
              Nama Obat
              <i className="fa fa-sort float-right" aria-hidden="true" />
            </th>
            <th className="th-sm">
              Harga Beli
              <i className="fa fa-sort float-right" aria-hidden="true" />
            </th>
            <th className="th-sm">
              Harga Jual
              <i className="fa fa-sort float-right" aria-hidden="true" />
            </th>
            <th className="th-sm">
              Stok Gudang
              <i className="fa fa-sort float-right" aria-hidden="true" />
            </th>
            <th className="th-sm">
              Tanggal Expired
              <i className="fa fa-sort float-right" aria-hidden="true" />
            </th>
          </tr>
        </thead>
        <tbody className="table-body">
          <tr>
            <td>Jonas Alexander</td>
            <td>Developer</td>
            <td>San Francisco</td>
            <td>30</td>
            <td>2010/07/14</td>
          </tr>
          <tr>
            <td>Shad Decker</td>
            <td>Regional Director</td>
            <td>Edinburgh</td>
            <td>51</td>
            <td>2008/11/13</td>
          </tr>
          <tr>
            <td>Michael Bruce</td>
            <td>Javascript Developer</td>
            <td>Singapore</td>
            <td>29</td>
            <td>2011/06/27</td>
          </tr>
          <tr>
            <td>Donna Snider</td>
            <td>Customer Support</td>
            <td>New York</td>
            <td>27</td>
            <td>2011/01/25</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th>Nama Obat</th>
            <th>Harga Beli</th>
            <th>Harga Jual</th>
            <th>Stok Gudang</th>
            <th>Tanggal Expired</th>
          </tr>
        </tfoot>
      </table>
    );
  }
}

export default TableApotek;

import axios from "axios";

const apiURL = "http://10.6.35.1:8004";

let tambahDetailTransaksi = ({ uid, item_transaksi, jumlah_item, biaya }) => {
  console.log({
    item_transaksi,
    jumlah_item,
    biaya
  });
  return axios.post(apiURL + "/api/v1/histori_tindakan" + uid, {
    item_transaksi,
    jumlah_item,
    biaya
  });
};

export default tambahDetailTransaksi;

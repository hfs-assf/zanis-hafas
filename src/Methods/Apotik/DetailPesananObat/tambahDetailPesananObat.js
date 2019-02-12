import axios from "axios";
const apiURL = "http://localhost:8005";

let tambahDetailPesananObat = ({ uid, doResep }) => {
  var resep = JSON.stringify(doResep);
  //   return axios.post(apiURL + "/api/v1/detail-pesanan-obat/" + uid, {
  //     resep
  //   });
  console.log(resep);
};

export default tambahDetailPesananObat;

import axios from "axios";
let baseUrl = "https://jsonplaceholder.typicode.com/posts";

let tambahPoliklinik = ({ nama_poli }) => {
  return axios.post(baseUrl, { nama_poli });
};

export default tambahPoliklinik;

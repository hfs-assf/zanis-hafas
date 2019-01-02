import axios from "axios";

const apiURL = "https://jsonplaceholder.typicode.com/posts/";

let hapusItemLabor = id => {
  return axios.delete(apiURL + id);
};

export default hapusItemLabor;

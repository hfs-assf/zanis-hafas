import axios from "axios";

const apiURL = "https://jsonplaceholder.typicode.com/posts/";

let editItemLabor = ({ id, title, body }) => {
  return axios.put(apiURL + id, {
    title,
    body
  });
};

export default editItemLabor;

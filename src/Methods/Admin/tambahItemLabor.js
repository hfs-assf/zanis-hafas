import axios from "axios";
let baseUrl = "https://jsonplaceholder.typicode.com/posts";

let tambahItemLabor = ({ title, body }) => {
  return axios.post(
    baseUrl,
    { title, body },
    {
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    }
  );
};

export default tambahItemLabor;

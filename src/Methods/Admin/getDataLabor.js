import axios from "axios";

let FakeUrl = "https://jsonplaceholder.typicode.com/posts";

let listLabor = () => {
  return axios.get(FakeUrl);
};

export default listLabor;

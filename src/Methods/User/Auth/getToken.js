let getToken = () => {
  let token = localStorage.getItem("token");

  if (token) return token;
  return null;
};

export default getToken;

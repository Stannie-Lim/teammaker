import axios from "axios";

export const getJWT = () => {
  return localStorage.getItem("user");
};

export const setJWT = (jwt) => {
  localStorage.setItem("user", jwt);
};

export const removeJWT = () => {
  localStorage.removeItem("user");
};

export const AxiosHttpRequest = async (method, url, data) => {
  switch (method) {
    case "GET":
      return axios.get(url, {
        headers: {
          Authorization: `Bearer ${await getJWT()}`,
        },
      });
    case "POST":
      return axios.post(url, data, {
        headers: {
          Authorization: `Bearer ${await getJWT()}`,
        },
      });
    case "DELETE":
      return axios.delete(url, {
        headers: {
          Authorization: `Bearer ${await getJWT()}`,
        },
        data,
      });
    case "PUT":
      return axios.put(url, data, {
        headers: {
          Authorization: `Bearer ${await getJWT()}`,
        },
      });
    default:
      alert("Not a valid method");
      break;
  }
};

export const getMe = async () => {
  const user = (await AxiosHttpRequest("GET", "/api/auth/me")).data;
  return user;
};

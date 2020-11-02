import { _login, _register } from "./actions";
import { AxiosHttpRequest, setJWT } from "../../utils/axios";

export const login = (email, password) => {
  return async (dispatch) => {
    try {
      const token = (
        await AxiosHttpRequest("POST", "/api/auth/login", { email, password })
      ).data;
      console.log(token);
      // dispatch(_login(tempdata));
    } catch (err) {
      console.log(err);
    }
  };
};

export const register = (email, password) => {
  return async (dispatch) => {
    try {
      const token = (
        await AxiosHttpRequest("POST", "/api/auth/register", {
          email,
          password,
        })
      ).data;
      setJWT(token);
      // dispatch(_login(tempdata));
    } catch (err) {
      console.log(err);
    }
  };
};

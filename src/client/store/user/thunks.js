import { _login, _register } from "./actions";
import { AxiosHttpRequest, setJWT, getMe } from "../../utils/axios";

export const login = (email, password) => {
  return async (dispatch) => {
    try {
      const token = (
        await AxiosHttpRequest("POST", "/api/auth/login", { email, password })
      ).data;
      setJWT(token);
      const user = await getMe();
      dispatch(_login(user));
    } catch (err) {
      console.log(err);
    }
  };
};

export const register = (firstName, lastName, email, password) => {
  return async () => {
    try {
      await AxiosHttpRequest("POST", "/api/auth/register", {
        firstName,
        lastName,
        email,
        password,
      });
      login(email, password);
    } catch (err) {
      console.log(err);
    }
  };
};

import { setJWT, getMe } from "../../utils/axios";
import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

// css
import "./login.css";

// store
import { login } from "../../store/store";
import { _login } from "../../store/user/actions";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const signin = (ev) => {
    ev.preventDefault();
    dispatch(login(email, password));
  };

  const isLoggedIn = useSelector(({ user }) => !!user.id);
  if (isLoggedIn) {
    return <Redirect to="/home" />;
  }

  return (
    <div className="authform">
      <form onSubmit={signin}>
        <input
          type="text"
          onChange={({ target }) => setEmail(target.value)}
          value={email}
          placeholder="Email"
        />
        <input
          type="text"
          onChange={({ target }) => setPassword(target.value)}
          value={password}
          placeholder="Password"
        />
        <button>Sign in</button>
        <h1>
          No account? <Link to="register">Click here</Link> to register!
        </h1>
      </form>
    </div>
  );
};

export default Login;

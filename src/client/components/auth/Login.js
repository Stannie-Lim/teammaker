import React, { useState } from "react";
import { Link } from "react-router-dom";

// css
import "./login.css";

// store
import { login } from "../../store/store";
import { useDispatch } from "react-redux";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const signin = (ev) => {
    ev.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <div className="login">
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
          No account? <Link to="register">Click here</Link> to sign in!
        </h1>
      </form>
    </div>
  );
};

export default Login;

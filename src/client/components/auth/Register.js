import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

// css
import "./register.css";

// store
import { register } from "../../store/store";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const registerNewAccount = (ev) => {
    ev.preventDefault();
    dispatch(register(email, password));
  };

  return (
    <div className="authform">
      <form onSubmit={registerNewAccount}>
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
        <button>Register</button>
        <h1>
          Already have an account? <Link to="login">Click here</Link> to sign
          in!
        </h1>
      </form>
    </div>
  );
};

export default Register;

import React, { useState } from "react";

// css
import "./login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signin = (ev) => {
    ev.preventDefault();
    console.log(email, password);
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
      </form>
    </div>
  );
};

export default Login;

import React, { useState } from "react";

// css
import "register.css";

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
    <div className="login">
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
        <button>Sign in</button>
      </form>
    </div>
  );
};

export default Register;

import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeJWT } from "../../utils/axios";

// store
import { signout } from "../../store/store";

const Logout = () => {
  const dispatch = useDispatch();

  const logout = () => {
    removeJWT();
    dispatch(signout());
  };

  return (
    <Link to="/login" onClick={logout}>
      Log out
    </Link>
  );
};

export default Logout;

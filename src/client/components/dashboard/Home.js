import React from "react";
import { useSelector } from "react-redux";

// components
import Nav from "../nav/Nav";

const Home = () => {
  const user = useSelector(({ user }) => user);

  console.log(user);
  return (
    <div>
      <Nav />
      <h1>you are logged in as {user.fullName}</h1>
    </div>
  );
};

export default Home;

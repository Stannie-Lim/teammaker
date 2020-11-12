import React, { useState } from "react";
import { useSelector } from "react-redux";

// components
import Nav from "../nav/Nav";

// css
import "./Teams.css";

const Home = () => {
  const user = useSelector(({ user }) => user);

  // this is gonna be in the redux store
  const users = [
    { id: 1, fullName: "user1" },
    { id: 2, fullName: "user2" },
    { id: 3, fullName: "user3" },
    { id: 4, fullName: "user4" },
    { id: 5, fullName: "user5" },
    { id: 6, fullName: "user6" },
    { id: 7, fullName: "user7" },
    { id: 8, fullName: "user8" },
    { id: 9, fullName: "user9" },
    { id: 10, fullName: "user10" },
    { id: 11, fullName: "user11" },
    { id: 12, fullName: "user12" },
  ];

  const [teamA, setTeamA] = useState([]);
  const [teamB, setTeamB] = useState([]);

  const randomize = () => {
    const shuffle = [...users];
    let currentIndex = shuffle.length;

    while (currentIndex !== 0) {
      const randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      const temporaryValue = shuffle[currentIndex];
      shuffle[currentIndex] = shuffle[randomIndex];
      shuffle[randomIndex] = temporaryValue;
    }

    const middle = Math.floor(shuffle.length / 2);
    const [makeTeamA, makeTeamB] = [
      shuffle.slice(0, middle),
      shuffle.slice(middle, shuffle.length),
    ];

    setTeamA(makeTeamA);
    setTeamB(makeTeamB);
  };

  return (
    <div>
      <Nav />
      <h1>you are logged in as {user.fullName}</h1>

      <div>
        <h1>All users</h1>
        {users && users.map((user) => <h3>{user.fullName}</h3>)}
      </div>

      <button onClick={randomize}>Randomize Teams</button>

      <div className="teams">
        <div>{teamA && teamA.map((user) => <h3>{user.fullName}</h3>)}</div>
        <div>{teamB && teamB.map((user) => <h3>{user.fullName}</h3>)}</div>
      </div>
    </div>
  );
};

export default Home;

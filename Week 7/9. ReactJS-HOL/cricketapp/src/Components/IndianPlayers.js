
import React from "react";

const IndianPlayers = () => {
  // Odd and even players using destructuring
  const teamPlayers = ["Kohli", "Rohit", "Gill", "Rahul", "Jadeja", "Iyer"];
  const [odd1, even1, odd2, even2, odd3, even3] = teamPlayers;

  // Two arrays merged as per handons instruction
  const T20players = ["Kohli", "Rohit", "Hardik"];
  const RanjiTrophyPlayers = ["Pujara", "Rahane", "Jadeja"];
  const mergedPlayers = [...T20players, ...RanjiTrophyPlayers];

  return (
    <div>
      <h2>Odd Team Players (Destructuring):</h2>
      <ul>
        <li>{odd1}</li>
        <li>{odd2}</li>
        <li>{odd3}</li>
      </ul>
    <hr/>

      <h2>Even Team Players (Destructuring):</h2>
      <ul>
        <li>{even1}</li>
        <li>{even2}</li>
        <li>{even3}</li>
      </ul>
      <hr/>

      <h2>Merged Players (Spread Operator):</h2>
      <ul>
        {mergedPlayers.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>
    </div>
  );
};

export default IndianPlayers;

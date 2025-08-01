
import React from "react";

const ListofPlayers = () => {
  const players = [
    { 
        name: "Virat Kohli", 
        score: 80 
    },
    { 
        name: "Rohit Sharma", 
        score: 65
     },
    { 
        name: "Shubman Gill",
         score: 72 
        },
    { 
        name: "KL Rahul",
         score: 55 
        },
    { 
        name: "Hardik Pandya", 
        score: 90 
    },
    { 
        name: "Ravindra Jadeja", 
        score: 45 
    },
    { 
        name: "Shreyas Iyer", 
        score: 88 
    },
    { 
        name: "Suryakumar Yadav",
         score: 60
         },
    { 
        name: "R Ashwin",
         score: 77 
        },
    { 
        name: "Bumrah", 
        score: 50
     },
    { 
        name: "Mohammed Siraj", 
        score: 68 },
  ];

  // Filtering player with less than 70 score
  const lowScorers = players.filter(player => player.score < 70);

  return (
    <div>
      <h2>List of Players :</h2>
      <ul>
        {players.map((player, index) => (
          <li key={index}>{player.name} - {player.score}</li>
        ))}
      </ul>

<hr/>
      <h2>List of Players Having Scores less than 70 :</h2>
      <ul>
        {lowScorers.map((player, index) => (
          <li key={index}>{player.name} - {player.score}</li>
        ))}
      </ul>
      <hr/>
    </div>
  );
};

export default ListofPlayers;

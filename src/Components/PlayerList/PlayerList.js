// src/PlayersList.js
import React from "react";
import Player2 from "./Player2";
import player1 from "./players1";

const PlayersList = () => {
  return (
    <div style={{ display: "grid", flexWrap: "wrap" }}>
      {player1.map((player2, index) => (
        <Player2 key={index} {...player2} />
      ))}
    </div>
  );
};

export default PlayersList;

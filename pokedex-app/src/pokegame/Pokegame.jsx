import React from "react";
import Pokedex from "../pokedex/Pokedex";
import "./Pokegame.css";
import { useState, useEffect } from "react";

const Pokegame = () => {
  const [expTeamOne, setExpTeamOne] = useState(0);
  const [expTeamTwo, setExpTeamTwo] = useState(0);
 

   function handleClick(e){
    e.preventDefault();
    window.location.reload()
  }
  return (
    <div>
      <div className="Pokegame-results">
        {expTeamOne > expTeamTwo ? <h1> Team One Won!</h1> : null}
        {expTeamOne < expTeamTwo ? <h1> Team Two Won!</h1> : null}
        {expTeamOne === expTeamTwo ? <h1> It is a draw!</h1> : null}
      </div>
      <div className={expTeamOne > expTeamTwo ? "winner-up" : "loser-up"}>
        <Pokedex  setTest={(test) => setExpTeamOne(test)} />
      </div>
      <div className={expTeamOne > expTeamTwo ? "loser-down" : "winner-down"} >
        <Pokedex setTest={(test) => setExpTeamTwo(test)} />
      </div>
      <button className="Pokegame-button" onClick={handleClick}>Play again!</button>
    </div>
  );
};

export default Pokegame;

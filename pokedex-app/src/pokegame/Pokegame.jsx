import React from "react";
import Pokedex from "../pokedex/Pokedex";
import { useState, useEffect } from "react";

const Pokegame = () => {
  const [expTeamOne, setExpTeamOne] = useState(0);
  const [expTeamTwo, setExpTeamTwo] = useState(0);
  console.log(expTeamOne);
  console.log(expTeamTwo);

   function handleClick(e){
    e.preventDefault();
    window.location.reload()
  }
  return (
    <div>
      <div>
        {expTeamOne > expTeamTwo ? <p> Team One Won!</p> : null}
        {expTeamOne < expTeamTwo ? <p> Team Two Won!</p> : null}
        {expTeamOne == expTeamTwo ? <p> It is a draw!</p> : null}
      </div>
      <div>
        <Pokedex setTest={(test) => setExpTeamOne(test)} />
      </div>
      <div>
        <Pokedex setTest={(test) => setExpTeamTwo(test)} />
      </div>
      <button onClick={handleClick}>Play again!</button>
    </div>
  );
};

export default Pokegame;

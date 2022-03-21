import React from "react";
import Pokedex from "../pokedex/Pokedex";
import "./Pokegame.css";
import { useState, useEffect } from "react";



const Pokegame = ({ pokemon = defaultProps.pokemon }) => {

  

  // Two arrays for both teams:
  let teamOne = [];
  let teamTwo = [ ...pokemon ];

  // While TeamOne array is shorter than TeamTwo => 1 element will be moved from 2 to 1.
  while (teamOne.length < teamTwo.length) {
    let randIdx = Math.floor(Math.random() * teamTwo.length);
    let randPokemon = teamTwo.splice(randIdx, 1)[0];
    teamOne.push(randPokemon);
  }
  let exp1 = teamOne.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);
  let exp2 = teamTwo.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);

  return (
    <div>
      <div className="Pokegame-results">
        {exp1 > exp2 ? <h1> Team One Won!</h1> : null}
        {exp1 < exp2 ? <h1> Team Two Won!</h1> : null}
        {exp1 === exp2 ? <h1> It is a draw!</h1> : null}
      </div>
      <div className={exp1 > exp2 ? "winner-up" : "loser-up"}>
      <Pokedex pokemon={teamOne} exp={exp1} isWinner={exp1 > exp2} />
      </div>
      <div className={exp1 > exp2 ? "loser-down" : "winner-down"} >
      <Pokedex pokemon={teamTwo} exp={exp2} isWinner={exp2 > exp1} />
      </div>
    </div>
  );
};

 const defaultProps = {
 
  pokemon : [
    { id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
    { id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
    { id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
    { id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
    { id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
    { id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
    { id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
    { id: 133, name: 'Eevee', type: 'normal', base_experience: 65 }
  ]
};

export default Pokegame;

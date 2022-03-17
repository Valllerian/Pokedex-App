import React, { Children } from "react";
import Pokecard from "../pokecard/Pokecard";
import "./Pokedex.css";
import { useState } from "react";

const Pokedex = () => {

  const [experienceTeamOne, setExperienceTeamOne] = useState(0);
  const [experienceTeamTwo, setExperienceTeamTwo] = useState(0);
  
 const calculateExp = (e) => {
  console.log(e.currentTarget.previousElementSibling.children[0].children[0].getAttribute("data-id"))
  }

  return (
    <div>
      <div>
        <div className="Pokedex">
          <div className="column">
            <Pokecard />
          </div>
          <div className="column">
            <Pokecard />
          </div>
          <div className="column">
            <Pokecard />
          </div>
          <div className="column">
            <Pokecard />
          </div>
          <button>Calculate Exp</button>
        </div>
      </div>
      <div>
        <div className="Pokedex">
          <div className="column">
            <Pokecard />
          </div>
          <div className="column">
            <Pokecard />
          </div>
          <div className="column">
            <Pokecard />
          </div>
          <div className="column">
            <Pokecard />
          </div>
          <button id="btn" onClick={calculateExp}>Calculate Exp</button>
        </div>
      </div>
    </div>
  );
};

export default Pokedex;

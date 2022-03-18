import React, { Children } from "react";
import Pokecard from "../pokecard/Pokecard";
import "./Pokedex.css";
import { useState, useEffect } from "react";

const Pokedex = () => {

  const [totalExp, setTotalExp] = useState(0)



  return (
    <div>
      <h1>hi</h1>
      {/* <div>

        <div className="Pokedex">
          <div className="column">
            <Pokecard Changedata={(totalExp) => setTotalExp(totalExp)}/>
        
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
        </div>
      </div> */}
  
    </div>
  );
};

export default Pokedex;

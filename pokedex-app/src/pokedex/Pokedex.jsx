import React from "react";
import Pokecard from "../pokecard/Pokecard";
import "./Pokedex.css";


const Pokedex = (props) => {

  return (
    <div>
      <div>
        <div className="Pokedex">
          <div className="column">
          {props.pokemon.map((card) => (
						<Pokecard id={card.id} name={card.name} type={card.type} exp={card.base_experience} />
					))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pokedex;

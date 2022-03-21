import React from "react";
import "./Pokecard.css";


const Pokecard = (props) => {
//  add image function

  return (
    <div className="Pokecard">
      <div >
        <p>{props.name}</p>
        <img
          className="Pokemon-img"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`}
          alt="pokemon image"
        />
        <p>Type: {props.type}</p>
        <p>EXP: {props.exp}</p>
      </div>
    </div>
  );
};

export default Pokecard;

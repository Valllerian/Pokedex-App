import React from 'react'
import './Pokecard.css'

const Pokecard = () => {
  let pokemons = [
    {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
    {id: 7, name: 'Squitle', type: 'water', base_experience: 63},
    {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
    {id: 12, name: 'Buttlefree', type: 'flying', base_experience: 178},
    {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
    {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
    {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
    {id: 133, name: 'Eevee', type: 'normal', base_experience: 65},
  ]
  let randomiser = pokemons[Math.floor(Math.random()*pokemons.length)];

  return (
    <div>
      <div data-id={randomiser.base_experience}>
          <p>{randomiser.name}</p>
          <img className="Pokemon-img" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${randomiser.id}.png`} alt="pokemon image"/>
          <p>Type: {randomiser.type}</p>
          <p>EXP: {randomiser.base_experience}</p>
        </div>
    </div>
  )
}

export default Pokecard
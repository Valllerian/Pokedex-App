import React from "react";
import Pokecard from "../pokecard/Pokecard";
import "./Pokedex.css";
import { useState, useEffect } from "react";

const Pokedex = (props) => {

const [expCard1, setExpCard1] = useState(0)
const [expCard2, setExpCard2] = useState(0)
const [expCard3, setExpCard3] = useState(0)
const [expCard4, setExpCard4] = useState(0)

const[totalExp, setTotalExp] = useState(0)

const [test, setTest] = useState(0)

useEffect(() => {
  setTotalExp(expCard1 + expCard2 + expCard3 + expCard4)
  props.setTest(totalExp)
}, [expCard1, expCard2, expCard3, expCard4])

console.log(totalExp)

// console.log(totalExp)
  return (
    <div>
      <div>
        <div className="Pokedex">
          <div className="column">
            <Pokecard setExp={exp => setExpCard1(exp)} />
          </div>
          <div className="column">
            <Pokecard setExp={exp => setExpCard2(exp)} />
          </div>
          <div className="column">
            <Pokecard setExp={exp => setExpCard3(exp)} />
          </div>
          <div className="column">
            <Pokecard setExp={exp => setExpCard4(exp)} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pokedex;

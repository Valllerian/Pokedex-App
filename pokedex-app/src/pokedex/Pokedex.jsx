import React, { Children } from "react";
import Pokecard from "../pokecard/Pokecard";
import "./Pokedex.css";
import { useState } from "react";

const Pokedex = () => {

  const [experienceTeamOne, setExperienceTeamOne] = useState(0);
  const [experienceTeamTwo, setExperienceTeamTwo] = useState(0);
  
  const calculateExpTeam1 = (e) => {
    let mainElement = e.currentTarget.previousElementSibling.children[0].children[0].getAttribute("data-id")
    console.log(mainElement)
    let previousElement = e.currentTarget.previousElementSibling
    let exp2 = previousElement.previousElementSibling.children[0].children[0].getAttribute("data-id")
    console.log(exp2)
    let previousElement2 = previousElement.previousElementSibling
    let exp3 = previousElement2.previousElementSibling.children[0].children[0].getAttribute("data-id")
    console.log(exp3)
    let previousElement3 = previousElement2.previousElementSibling
    let exp4 = previousElement3.previousElementSibling.children[0].children[0].getAttribute("data-id")
    console.log(exp4)
    let totalExp = Number(mainElement) + Number(exp2) + Number(exp3) + Number(exp4)
    setExperienceTeamOne(totalExp)
    console.log(experienceTeamOne)
    // setExperienceTeamOne(mainElement + exp2 + exp3 + exp4)
    // console.log("This is EXP sum: " + experienceTeamOne)
  }

 const calculateExpTeam2 = (e) => {
    let mainElement = e.currentTarget.previousElementSibling.children[0].children[0].getAttribute("data-id")
    console.log(mainElement)
    let previousElement = e.currentTarget.previousElementSibling
    let exp2 = previousElement.previousElementSibling.children[0].children[0].getAttribute("data-id")
    console.log(exp2)
    let previousElement2 = previousElement.previousElementSibling
    let exp3 = previousElement2.previousElementSibling.children[0].children[0].getAttribute("data-id")
    console.log(exp3)
    let previousElement3 = previousElement2.previousElementSibling
    let exp4 = previousElement3.previousElementSibling.children[0].children[0].getAttribute("data-id")
    console.log(exp4)
    let totalExp = Number(mainElement) + Number(exp2) + Number(exp3) + Number(exp4)
    setExperienceTeamTwo(totalExp)
    console.log(experienceTeamTwo)
    // setExperienceTeamOne(mainElement + exp2 + exp3 + exp4)
    // console.log("This is EXP sum: " + experienceTeamOne)
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
          <button id="btn" onClick={calculateExpTeam1}>Calculate Exp</button>
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
          <button id="btn" onClick={calculateExpTeam2}>Calculate Exp</button>
        </div>
      </div>
    </div>
  );
};

export default Pokedex;

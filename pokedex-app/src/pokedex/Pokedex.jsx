import React, { Children } from "react";
import Pokecard from "../pokecard/Pokecard";
import "./Pokedex.css";
import { useState } from "react";

const Pokedex = () => {
  const [experienceTeamOne, setExperienceTeamOne] = useState(0);
  const [experienceTeamTwo, setExperienceTeamTwo] = useState(0);
  const [draw, setDraw] = useState(false);
  const [teamOneWin, setTeamOneWin] = useState(false);
  const [teamTeoWin, setTeamTwoWin] = useState(false);

  const calculatePower = (e) => {
    e.preventDefault();
    document.getElementById("btnTeam1").click()
    document.getElementById("btnTeam2").click()
    if(experienceTeamOne == experienceTeamTwo){
      setDraw(true)
    };
    if(experienceTeamOne > experienceTeamTwo){
      setTeamOneWin(true);
    }
    if(experienceTeamTwo > experienceTeamOne){
      setTeamTwoWin(true);
    }
  }


  const calculateExpTeam1 = (e) => {
    e.preventDefault();
    let mainElement =
      e.currentTarget.previousElementSibling.children[0].children[0].getAttribute(
        "data-id"
      );

    let previousElement = e.currentTarget.previousElementSibling;
    let exp2 =
      previousElement.previousElementSibling.children[0].children[0].getAttribute(
        "data-id"
      );

    let previousElement2 = previousElement.previousElementSibling;
    let exp3 =
      previousElement2.previousElementSibling.children[0].children[0].getAttribute(
        "data-id"
      );

    let previousElement3 = previousElement2.previousElementSibling;
    let exp4 =
      previousElement3.previousElementSibling.children[0].children[0].getAttribute(
        "data-id"
      );

    let totalExp =
      Number(mainElement) + Number(exp2) + Number(exp3) + Number(exp4);
    setExperienceTeamOne(totalExp);
    console.log("Team 1 total EXP: " + experienceTeamOne);
    // setExperienceTeamOne(mainElement + exp2 + exp3 + exp4)
    // console.log("This is EXP sum: " + experienceTeamOne)
  };

  const calculateExpTeam2 = (e) => {
    e.preventDefault();
    let mainElement =
      e.currentTarget.previousElementSibling.children[0].children[0].getAttribute(
        "data-id"
      );

    let previousElement = e.currentTarget.previousElementSibling;
    let exp2 =
      previousElement.previousElementSibling.children[0].children[0].getAttribute(
        "data-id"
      );

    let previousElement2 = previousElement.previousElementSibling;
    let exp3 =
      previousElement2.previousElementSibling.children[0].children[0].getAttribute(
        "data-id"
      );

    let previousElement3 = previousElement2.previousElementSibling;
    let exp4 =
      previousElement3.previousElementSibling.children[0].children[0].getAttribute(
        "data-id"
      );

    let totalExp =
      Number(mainElement) + Number(exp2) + Number(exp3) + Number(exp4);
    setExp2(totalExp);
    console.log("Team 2 total EXP: " + experienceTeamTwo);
    // setExperienceTeamOne(mainElement + exp2 + exp3 + exp4)
    // console.log("This is EXP sum: " + experienceTeamOne)
  };

  const setExp2 = (totalExp) => {
    setExperienceTeamTwo(totalExp);
  };
  return (
    <div>
      <div>
        <p>Hi</p>
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
          <button id="btnTeam1" onClick={(e) => calculateExpTeam1(e)}>
            Calculate Exp
          </button>
        </div>
      </div>
      <div>
      <p>Hi</p>
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
          <button id="btnTeam2" onClick={(e) => calculateExpTeam2(e)}>
            Calculate Exp
          </button>
        </div>
      </div>
      <div>
      <button id="btnTeam3" onClick={(e) => calculatePower(e)}>
            Calculate Power and Fight!
          </button>
      </div>
    </div>
  );
};

export default Pokedex;

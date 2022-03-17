import React, { Children } from "react";
import Pokecard from "../pokecard/Pokecard";
import "./Pokedex.css";
import { useState } from "react";

const Pokedex = () => {
  const [experienceTeamOne, setExperienceTeamOne] = useState(0);
  const [experienceTeamTwo, setExperienceTeamTwo] = useState(0);
  const [draw, setDraw] = useState(false);
  const [teamOneWin, setTeamOneWin] = useState(false);
  const [teamTwoWin, setTeamTwoWin] = useState(false);
  // const [readyToFight, setReadyToFight] = useState(false);

  const calculatePower = (e) => {
    e.preventDefault();
    document.getElementById("btnTeam1").click();
    document.getElementById("btnTeam2").click();
    setDraw(false);
    setTeamOneWin(false);
    setTeamTwoWin(false);
    fight();
  };

  const fight = () => {
    if (experienceTeamOne == experienceTeamTwo) {
      setDraw(true);
      console.log("It is a draw!");
      // setReadyToFight(true)
    }
    if (experienceTeamOne > experienceTeamTwo) {
      setTeamOneWin(true);
      console.log("Team One won!");
      // setReadyToFight(true)
    }
    if (experienceTeamTwo > experienceTeamOne) {
      setTeamTwoWin(true);
      console.log("Team Two won!");
      // setReadyToFight(true)
    }
  };

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

    // setExperienceTeamOne(mainElement + exp2 + exp3 + exp4)
    // console.log("This is EXP sum: " + experienceTeamOne)
  };

  const setExp2 = (totalExp) => {
    setExperienceTeamTwo(totalExp);
  };
  return (
    <div>
      <div>
        <h3>
          {draw ? <p>It`s a DRAW!</p> : null}
          {teamOneWin ? <p> Team One WON!</p> : null}
          {teamTwoWin ? <p> Team One LOST!</p> : null}
        </h3>
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
        <h3>
          {draw ? <p>It`s a DRAW!</p> : null}
          {teamOneWin ? <p> Team Two LOST!</p> : null}
          {teamTwoWin ? <p> Team Two WON!</p> : null}
        </h3>
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

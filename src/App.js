import './App.css';

import HomeScreen from './Components/HomeScreen/HomeScreen';
import MainGame from './Components/MainGame/MainGame';
import EndScreen from './Components/EndScreen/EndScreen';


import React, { useState } from 'react';

const getRndInteger = (min, max) => {  // both included
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let previousShape = -1;
let tempTimeArray = [];


// 0 - pentagon
// 1 - circle
// 2 - triangle
// 3 - square

const App = () => {
  const [shape, setShape] = React.useState("");
  const [currentRound, setCurrentRound] = React.useState(-1);

  const [time, setTime] = React.useState(0);
  const [bestAvg, setBestAvg] = React.useState(9999);
  const [isBestTime, setIsBestTime] = React.useState(false);

  const [timerOn, setTimerOn] = React.useState(false);
  const [timeAvg, setTimeAvg] = React.useState(999999);

  const [isCountdown, setIsCountdown] = React.useState(false);

  const [isEnd, setIsEnd] = React.useState(false);
  const [isHome, setIsHome] = React.useState(true);




  const [coins, setCoins] = React.useState(0);
  const [gems, setGems] = React.useState(0);



  const [counter, setCounter] = React.useState(4);


  const checkIsCorrect = (clickedShape) => {
    if (clickedShape === previousShape) console.log("correct");
    else console.log("wrong");
  }

  const startGame = () => {
    generateNewGame();
    setTime(0);
    setCurrentRound(0)
    setTimerOn(false);
    setIsHome(false);
    setIsEnd(false);
    setCounter(3)
    setIsCountdown(true);
  }

  React.useEffect(() => {
    if (counter <= 3) {
      counter > 0 && setTimeout(() => setCounter(counter - 1), 800);
      if (counter === 0) {
        setIsCountdown(false);
        setTimerOn(true);
        setCounter(4);
      }
    }
  }, [counter]);


  const generateNewGame = () => {
    let newShape = getRndInteger(0, 3);
    if (newShape !== previousShape) {
      previousShape = newShape;
      setShape(newShape);
    }
    else {
      newShape = (newShape === 3) ? 0 : 3;
      previousShape = newShape;
      setShape(newShape);
    }
  }

  const updateGameState = (clickedShape) => {
    if (currentRound >= 9) {
      // end screen
      setIsEnd(true);
      let x = 0;
      for (let i = 0; i < tempTimeArray.length; i++) {
        x += tempTimeArray[i];
      }
      x = x / 10;
      setTimeAvg(x);
      console.log(tempTimeArray);

      if (x < bestAvg) {
        setBestAvg(x);
        setIsBestTime(true);
      }
      else setIsBestTime(false);
      calculateCoinsAndGems();

      tempTimeArray = [];
    }

    checkIsCorrect(clickedShape);
    setCurrentRound(prevRound => prevRound + 1)
    let newShape = getRndInteger(0, 3);
    if (newShape !== previousShape) {
      previousShape = newShape;
      setShape(newShape);
    }
    else {
      newShape = (newShape === 3) ? 0 : 3;
      previousShape = newShape;
      setShape(newShape);
    }

    if (currentRound >= 0) {
      tempTimeArray.push(time);
    }
    setTime(0);
  }

  const calculateCoinsAndGems = () => {
    if (!isNaN(timeAvg)) {
      if (timeAvg >= 0 && timeAvg <= 0.10) {
        setCoins(coins + 83);
        setGems(gems + 3)
      }
      else if (timeAvg > 0.1 && timeAvg <= 0.14) {
        setCoins(coins + 61);
        setGems(gems + 2)
      }
      else if (timeAvg > 0.14 && timeAvg <= 0.19) {
        setCoins(coins + 30);
        setGems(gems + 0)
      }
      else if (timeAvg > 0.19 && timeAvg <= 0.22) {
        setCoins(coins + 21);
      }
      else if (timeAvg > 0.22 && timeAvg <= 0.24) {
        setCoins(coins + 17);
      }
      else if (timeAvg > 0.24 && timeAvg <= 0.26) {
        setCoins(coins + 11);
      }
      else if (timeAvg > 0.26 && timeAvg <= 0.30) {
        setCoins(coins + 8);
      }
      else if (timeAvg > 0.3 && timeAvg <= 0.42) {
        setCoins(coins + 4);
      }
      else {
        setCoins(coins + 2);
      }
    }
    console.log(coins)
  }

  return (
    <div className="App">
      {isHome && < HomeScreen startGame={startGame} coins={coins} gems={gems}/>}
      {!isEnd && !isHome &&
        < MainGame
          shape={shape}
          currentRound={currentRound}
          updateGameState={updateGameState}
          time={time} setTime={setTime}
          timerOn={timerOn}
          setTimerOn={setTimerOn}
          counter={counter}
          isCountdown={isCountdown}
        />
      }
      {isEnd && < EndScreen timeAvg={timeAvg} bestAvg={bestAvg} isBestTime={isBestTime} startGame={startGame} setIsHome={setIsHome} setIsEnd={setIsEnd} setCoins={setCoins} setGems={setGems} coins={coins} gems={gems} />}
    </div>
  );
}

export default App;


/*
< HomeScreen startGame={startGame}/>

{!isEnd &&
  < MainGame
    shape={shape}
    currentRound={currentRound}
    updateGameState={updateGameState}
    time={time} setTime={setTime}
    timerOn={timerOn}
    setTimerOn={setTimerOn} />
}
{isEnd && < EndScreen />}


*/
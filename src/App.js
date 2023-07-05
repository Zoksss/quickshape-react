import './App.css';
import HomeScreen from './Components/HomeScreen/HomeScreen';
import MainGame from './Components/MainGame/MainGame';
import EndScreen from './Components/EndScreen/EndScreen';
import ShopScreen from './Components/ShopScreen/ShopScreen';

import React from 'react';

const themes = require('./Components/themes')

const getRndInteger = (min, max) => {  // both included
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let previousShape = -1;
let tempTimeArray = [];


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

  const [coinsToAdd, setCoinsToAdd] = React.useState(0);
  const [gemsToAdd, setGemsToAdd] = React.useState(0);

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
      if (timeAvg >= 0 && timeAvg <= 100) {
        setCoins(coins + 83);
        setGems(gems + 3)
        setCoinsToAdd(83)
        setGemsToAdd(3)
      }
      else if (timeAvg > 100 && timeAvg <= 140) {
        setCoins(coins + 61);
        setGems(gems + 2)
        setCoinsToAdd(61)
        setGemsToAdd(2)
      }
      else if (timeAvg > 140 && timeAvg <= 190) {
        setCoins(coins + 30);
        setCoinsToAdd(30)
        setGemsToAdd(0)
      }
      else if (timeAvg > 190 && timeAvg <= 220) {
        setCoins(coins + 21);
        setCoinsToAdd(21);
        setGemsToAdd(0)

      }
      else if (timeAvg > 220 && timeAvg <= 240) {
        setCoins(coins + 17);
        setCoinsToAdd(17)
        setGemsToAdd(0)
      }
      else if (timeAvg > 240 && timeAvg <= 260) {
        setCoins(coins + 11);
        setCoinsToAdd(11)
        setGemsToAdd(0)
      }
      else if (timeAvg > 260 && timeAvg <= 300) {
        setCoins(coins + 8);
        setCoinsToAdd(8)
        setGemsToAdd(0)
      }
      else if (timeAvg > 300 && timeAvg <= 420) {
        setCoins(coins + 4);
        setCoinsToAdd(4)
        setGemsToAdd(0)
      }
      else {
        setCoins(coins + 2);
        setCoinsToAdd(2)
        setGemsToAdd(0)
      }
    }
  }


  const buyTheme = (themeName) => {
    console.log(themeName)
  }

  return (
    <div className="App">
      {isHome && < HomeScreen startGame={startGame} coins={coins} gems={gems} buyTheme={buyTheme}/>}
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
      {isEnd && < EndScreen timeAvg={timeAvg} bestAvg={bestAvg} isBestTime={isBestTime} startGame={startGame} setIsHome={setIsHome} setIsEnd={setIsEnd} setCoins={setCoins} setGems={setGems} coins={coins} gems={gems} coinsToAdd={coinsToAdd} gemsToAdd={gemsToAdd} />}
      
    </div>
  );
}

export default App;
import './App.css';
import NicknameEnter from './Components/NicknameEnter/NicknameEnter';
import HomeScreen from './Components/HomeScreen/HomeScreen';
import MainGame from './Components/MainGame/MainGame';
import EndScreen from './Components/EndScreen/EndScreen';

import React from 'react';

import calculateCoinsAndGems from "./Components/utilities/calculateCoinsAndGems.js"


import themesData from "../src/Components/utilities/themeData.js";
import buyTheme from "./Components/utilities/buyTheme.js";

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
  const [nickname, setNickname] = React.useState(() => {
    // getting stored value
    const saved = localStorage.getItem("local-data");
    const initialValue = JSON.parse(saved);
    return initialValue&&initialValue.nickname || "";
  });

  const [coinsToAdd, setCoinsToAdd] = React.useState(0);
  const [gemsToAdd, setGemsToAdd] = React.useState(0);

  const [counter, setCounter] = React.useState(4);

  const [isThemeChange, setIsThemeChange] = React.useState(false);

  const [unlockedThemes, setUnlockedThemes] = React.useState(["Basic"]);
  const [currentTheme, setCurrentTheme] = React.useState({
    "name": "SciFi",
    "backSRC": "themes/basic/back.png",
    "centerSRC": "themes/basic/center.png",
    "btnSRC": "themes/basic/btn.png",
    "btnWideSRC": "themes/basic/btn_wide.png",
    "navSRC": "themes/basic/nav.png",
    "topSRC": "themes/basic/top.png",
    "lineSRC": "themes/basic/line.png"
  });

  React.useEffect(() => {
    // storing input name
    localStorage.setItem("local-data", JSON.stringify({nickname: nickname, unlockedThemes: unlockedThemes, coins: coins, gems:gems, bestAvg:bestAvg}));
  }, [nickname, unlockedThemes, coins, gems, bestAvg]);


  const checkIsCorrect = (clickedShape) => {
    if (clickedShape === previousShape) console.log("correct");
    else console.log("wrong");
  }

  const setTheme = (themeName) => {
    setIsThemeChange(true);
    let themeObj = themesData.find(o => o.themeName === themeName);
    if (themeObj) setCurrentTheme(themeObj.object);
    console.log(currentTheme);
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
      calclulateStats();

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

  const calclulateStats = () => {
    let stats = calculateCoinsAndGems(timeAvg);
    setCoins(coins + stats[0]);
    setGems(gems + stats[1])
    setCoinsToAdd(stats[0]);
    setGemsToAdd(stats[1]);
  }

  const buyThemeTemp = (themeName) => {
    console.log(themeName)
    let x = buyTheme(themeName, coins, gems, unlockedThemes);  // unlockedThemes, priceCoin, priceGems. themeset
    if (x[3] === "") {
      setUnlockedThemes(unlockedThemes)
      setCoins(prev => prev - x[1]);
      setGems(prev => prev - x[2]);
    } else setTheme(x[3]);
  }



  return (
    <div className="App">
      {nickname === "" && <NicknameEnter setNickname={setNickname} />}
      {isHome && < HomeScreen
        startGame={startGame}
        coins={coins}
        gems={gems}
        buyTheme={buyThemeTemp}
        currentTheme={currentTheme}
        unlockedThemes={unlockedThemes}
        isThemeChange={isThemeChange}
        setIsThemeChange={setIsThemeChange}
        themesData={themesData}
        nickname={nickname} />}

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
          currentTheme={currentTheme}
        />
      }
      {isEnd &&
        < EndScreen
          timeAvg={timeAvg}
          bestAvg={bestAvg}
          isBestTime={isBestTime}
          startGame={startGame}
          setIsHome={setIsHome}
          setIsEnd={setIsEnd}
          setCoins={setCoins}
          setGems={setGems}
          coins={coins}
          gems={gems}
          coinsToAdd={coinsToAdd}
          gemsToAdd={gemsToAdd}
          currentTheme={currentTheme} />}
    </div>
  );
}

export default App;
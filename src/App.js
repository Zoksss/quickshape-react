import './App.css';

import HomeScreen from './Components/HomeScreen/HomeScreen';
import MainGame from './Components/MainGame/MainGame';
import EndScreen from './Components/EndScreen/EndScreen';


import React from 'react';

const getRndInteger = (min, max) => {  // both included
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let previousShape = -1;

// 0 - pentagon
// 1 - circle
// 2 - triangle
// 3 - square

const App = () => {
  const [shape, setShape] = React.useState("");
  const [currentRound, setCurrentRound] = React.useState(-1);

  const [time, setTime] = React.useState(0);
  const [timerOn, setTimerOn] = React.useState(false);
  const [isCountdown, setIsCountdown] = React.useState(false);

  const [isEnd, setIsEnd] = React.useState(false);
  const [isHome, setIsHome] = React.useState(true);


  const [counter, setCounter] = React.useState(4);


  const checkIsCorrect = (clickedShape) => {
    if (clickedShape === previousShape) console.log("correct");
    else console.log("wrong");
  }

  const startGame = () => {
    updateGameState();
    setIsHome(false);    
    setCounter(3)
    setIsCountdown(true);
  }

  React.useEffect(() => {
    if (counter <= 3) {
      counter > 0 && setTimeout(() => setCounter(counter - 1), 800);
      if(counter === 0){
        setIsCountdown(false);
        setTimerOn(true);
        setCounter(4);
      }
    }
  }, [counter]);

  const updateGameState = (clickedShape) => {
    if (currentRound >= 10) {
      // end screen
      setIsEnd(true);
      console.log("end")
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

    setTime(0);
    // push time in array here
  }

  return (
    <div className="App">
      {isHome && < HomeScreen startGame={startGame} />}
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
      {isEnd && < EndScreen />}
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
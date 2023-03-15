import './App.css';

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
  const [currentRound, setCurrentRound] = React.useState(0);

  const [time, setTime] = React.useState(0);
  const [timerOn, setTimerOn] = React.useState(true);

  const [isEnd, setIsEnd] = React.useState(false);


  const checkIsCorrect = (clickedShape) => {
    if (clickedShape === previousShape) console.log("correct");
    else console.log("wrong");
  }

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
  }

  return (
    <div className="App">
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
    </div>
  );
}

export default App;

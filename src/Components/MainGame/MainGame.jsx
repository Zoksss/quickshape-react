import './MainGame.css';
import React from 'react';


import Circle from "../../shapes/circle_pix.png";
import Square from "../../shapes/square_pix.png";
import Triangle from "../../shapes/triangle_pix.png";
import Pentagon from "../../shapes/pentagon_pix.png";

let shapes = [Pentagon, Circle, Triangle, Square];


const MainGame = (props) => {
    React.useEffect(() => {
        let interval = null;

        if (props.timerOn)
            interval = setInterval(() => {
                props.setTime(prevTime => prevTime + 10);
            }, 10);
        else {
            clearInterval(interval);
            // stops timer
        }
        return () => clearInterval(interval);
    }, []);


    return (
        <div className="main-game-container">
            <div className="main-game-top-row">
                <div className="time-counter"><p>{Math.floor((props.time/1000)%60).toString().slice(-2)}.{((props.time/10)%100).toString().slice(-2)}</p></div>
                <div className="round-counter"><p>{props.currentRound}/10</p></div>
            </div>
            <div className="center-shape-image">
                <img src={shapes[props.shape]} alt="circle" />
            </div>
            <div className="main-game-shape-buttons">
                <div className="main-game-shape-buttons-row">
                    <button onClick={() => props.updateGameState(0)}><img src={Pentagon} alt="circle" /></button>
                    <button onClick={() => props.updateGameState(1)}><img src={Circle} alt="circle" /></button>
                </div>
                <div className="main-game-shape-buttons-row">
                    <button onClick={() => props.updateGameState(2)}><img src={Triangle} alt="circle" /></button>
                    <button onClick={() => props.updateGameState(3)}><img src={Square} alt="circle" /></button>
                </div>
            </div>
        </div>
    );
}

export default MainGame;

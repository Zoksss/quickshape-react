import './MainGame.scss';
import React from 'react';


import Circle from "../../shapes/circle_pix.png";
import Square from "../../shapes/square_pix.png";
import Triangle from "../../shapes/triangle_pix.png";
import Pentagon from "../../shapes/pentagon_pix.png";

let shapes = [Pentagon, Circle, Triangle, Square];


const MainGame = (props) => {

    const styleBack = { backgroundImage: `url("${props.currentTheme.backSRC}")` }
    const styleBtn = { backgroundImage: `url("${props.currentTheme.btnSRC}")` }
    const styleTop = { backgroundImage: `url("${props.currentTheme.topSRC}")` }
    const styleCenter = { backgroundImage: `url("${props.currentTheme.centerSRC}")` }

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
    }, [props.timerOn]);


    return (
        <div className="main-game-container" style={styleBack}>
            {props.isCountdown && <div className="main-game-countdown">
                <p className={props.counter === 3 || props.counter === 1 ? "shake" : "shake2"}>{props.counter}</p>
            </div>}
            <div className="main-game-top-row">
                <div className="time-counter" style={styleTop}><p>{props.time / 1000}</p></div>
                <div className="round-counter" style={styleTop}><p>{props.currentRound}/10</p></div>
            </div>
            <div className="center-shape-image" style={styleCenter}>
                <img src={shapes[props.shape]} alt="circle" />
            </div>
            <div className="main-game-shape-buttons">
                <div className="main-game-shape-buttons-row">
                    <button onClick={() => props.updateGameState(0)} style={styleBtn}><img src={Pentagon} alt="circle" /></button>
                    <button onClick={() => props.updateGameState(1)} style={styleBtn}><img src={Circle} alt="circle" /></button>
                </div>
                <div className="main-game-shape-buttons-row">
                    <button onClick={() => props.updateGameState(2)} style={styleBtn}><img src={Triangle} alt="circle" /></button>
                    <button onClick={() => props.updateGameState(3)} style={styleBtn}><img src={Square} alt="circle" /></button>
                </div>
            </div>
        </div>
    );
}

export default MainGame;

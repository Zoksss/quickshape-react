import './EndScreen.scss';
import React from 'react';

import Coin from "../../Icons/coin_icon.png";
import Gem from "../../Icons/gem.png";
import PlayAgain from "../../Icons/play_again.png";



const EndScreen = (props) => {

    
    return (
        <div className="end-screen-container" style={{ backgroundImage: `url("${props.currentTheme.backSRC}")`}}>
            <p className="end-screen-average-round-time-title">AVERAGE TIME</p>
            <p className="end-screen-average-round-time" id="currRoundAverage">{props.timeAvg / 1000}</p>
            <p className="end-screen-best-time-title">BEST TIME</p>
            <p className={`end-screen-best-time  ${props.isBestTime ? "colorBlink" : ""}`}>{props.bestAvg / 1000}</p>
            <div className="underline" style={{ backgroundImage: `url("${props.currentTheme.lineSRC}")`}}></div>
            <div className="coins">
                <img className="coin-icon" src={Coin} alt="" />
                <p className="coin-value" id="endScreenCoins">+{props.coinsToAdd}</p>
            </div>
            <div className="gems">
                <img className="gems-icon" src={Gem} alt="" />
                <p className="gem-value" id="endScreenGems">+{props.gemsToAdd}</p>
            </div>
            <div className="underline" style={{ backgroundImage: `url("${props.currentTheme.lineSRC}")`}}></div>
            <div className="end-screen-buttons">
                <button onClick={() => { props.setIsHome(true); props.setIsEnd(false) }} className="go-back" style={{ backgroundImage: `url("${props.currentTheme.btnSRC}")`}}>
                    <p>MENU</p>
                </button>
                <button className="replay" onClick={() => props.startGame()} style={{ backgroundImage: `url("${props.currentTheme.btnSRC}")`}}><img className="play-again" src={PlayAgain} alt="" /></button>

            </div>
        </div>
    );
}

export default EndScreen;

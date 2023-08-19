import './EndScreen.scss';
import React from 'react';

import Coin from "../../Icons/coin_icon.png";
import Gem from "../../Icons/gem.png";
import PlayAgain from "../../Icons/play_again.png";



const EndScreen = (props) => {

    const styleBack = { backgroundImage: `url("${props.currentTheme.backSRC}")` }
    const styleBtn = { backgroundImage: `url("${props.currentTheme.btnSRC}")` }
    const styleLine = { backgroundImage: `url("${props.currentTheme.lineSRC}")` }

    return (
        <div className="end-screen-container" style={styleBack}>
            <p className="end-screen-average-round-time-title">AVERAGE TIME</p>
            <p className="end-screen-average-round-time" id="currRoundAverage">{props.timeAvg / 1000}</p>
            {!props.isMultiplayerActive && <>
                <p className="end-screen-best-time-title">BEST TIME</p>
                <p className={`end-screen-best-time  ${props.isBestTime ? "colorBlink" : ""}`}>{props.bestAvg / 1000}</p>
            </>
            }
            {props.isMultiplayerActive && <>
                <p className="end-screen-best-time-title">{props.oponentNickname}</p>
                <p className={`end-screen-best-time`}>{props.opponentAvgState/1000}</p>
            </>
            }
            <div className="underline" style={styleLine}></div>
            <div className="coins">
                <img className="coin-icon" src={Coin} alt="" />
                <p className="coin-value" id="endScreenCoins">+{props.coinsToAdd}</p>
            </div>
            <div className="gems">
                <img className="gems-icon" src={Gem} alt="" />
                <p className="gem-value" id="endScreenGems">+{props.gemsToAdd}</p>
            </div>
            <div className="underline" style={styleLine}></div>
            <div className="end-screen-buttons">
                <button onClick={() => { props.setIsHome(true); props.setIsEnd(false) }} className="go-back" style={styleBtn}>
                    <p>MENU</p>
                </button>
                <button className="replay" onClick={() => props.startGame()} style={styleBtn}><img className="play-again" src={PlayAgain} alt="" /></button>
            </div>
        </div>
    );
}

export default EndScreen;

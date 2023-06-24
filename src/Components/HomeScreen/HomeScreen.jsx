import './HomeScreen.scss';
import React from 'react';

import Triangle from "../../shapes/triangle_pix.png"
import Pentagon from "../../shapes/pentagon_pix.png"

import Shop from "../../Icons/shop.png"
import Main from "../../Icons/triangle_small.png"
import Inventory from "../../Icons/backpack.png"

import Coin from "../../Icons/coin_icon.png"
import Gem from "../../Icons/gem.png"


const HomeScreen = (props) => {
    return (
        <div className="home-screen-container">
            <div className="home-screen-top">
                <div className="nickname">
                    <p>Zoks</p>
                </div>
                <div className="top-row2">
                    <div className="coins">
                        <img src={Coin} alt="coin" />
                        <p>255</p>
                    </div>
                    <div className="gems">
                        <img src={Gem} alt="gem" />
                        <p>9</p>
                    </div>
                </div>
            </div>
            <button className="center-shape-image" onClick={() => props.startGame()}>
                <img src={Triangle} alt="circle" />
                <p>Play</p>
            </button>
            <button className="vs-button">
                <img src={Pentagon} alt="circle" />
                <p>VS</p>
            </button>

            <div className="home-screen-bottom">
                <button ><img src={Shop} alt="shop" /></button>
                <button className="active"><img src={Main} alt="shop" /></button>
                <button className="inv-img"><img src={Inventory} alt="shop" /></button>
            </div>
        </div>
    );
}

export default HomeScreen;

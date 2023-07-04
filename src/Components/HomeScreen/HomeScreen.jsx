import './HomeScreen.scss';
import React from 'react';

import Triangle from "../../shapes/triangle_pix.png"
import Pentagon from "../../shapes/pentagon_pix.png"

import Shop from "../../Icons/shop.png"
import Main from "../../Icons/triangle_small.png"
import Inventory from "../../Icons/backpack.png"

import Coin from "../../Icons/coin_icon.png"
import Gem from "../../Icons/gem.png"

import AlphaTheme from "../../Icons/ShopIcons/shop_theme_alpha.png"
import ScifiTheme from "../../Icons/ShopIcons/shop_theme_scifi.png"
import MatrixTheme from "../../Icons/ShopIcons/shop_theme_matrix.png"
import MountainTheme from "../../Icons/ShopIcons/shop_theme_mountain.png"
import DesertTheme from "../../Icons/ShopIcons/shop_theme_desert.png"


import ShopTheme from './ShopTheme';


const HomeScreen = (props) => {

    const [isShop, setIsShop] = React.useState(false);
    const [isInv, setIsInv] = React.useState(false);



    return (
        <div className="home-screen-container">
                <div className="home-screen-top">
                    <div className="nickname">
                        <p>Zoks</p>
                    </div>
                    <div className="top-row2">
                        <div className="coins">
                            <img src={Coin} alt="coin" />
                            <p>{props.coins}</p>
                        </div>
                        <div className="gems">
                            <img src={Gem} alt="gem" />
                            <p>{props.gems}</p>
                        </div>
                    </div>
                </div>

                {isShop && !isInv && <div className="shop-container">
                    <button className="center-shape-image shop-promo">
                        <p className="shop-promo-title">ALPHA THEME</p>
                        <div className="promo-reward-row">
                            <img className="promo-theme-img" src={AlphaTheme} alt="" />
                            <div className="promo-reward-side">
                                <div><img className="promo-coin-img" src={Coin} alt="" />75</div>
                                <div><img className="promo-gem-img" src={Gem} alt="" />10</div>
                            </div>
                        </div>
                        <p className="shop-promo-desc">CLAIM FOR FREE!</p>
                    </button>
                    <div className="theme-shop-contianer">
                        <ShopTheme price={170} img={ScifiTheme}/>
                        <ShopTheme price={550} img={MatrixTheme}/>
                        <ShopTheme price={370} img={DesertTheme} gems={true}/>
                        <ShopTheme price={200} img={MountainTheme}/>
                    </div>
                </div>}


                {!isShop && !isInv && <>
                <button className="center-shape-image" onClick={() => props.startGame()}>
                    <img src={Triangle} alt="circle" />
                    <p>PLAY</p>
                </button>
                <button className="vs-button">
                    <img src={Pentagon} alt="circle" />
                    <p>VS</p>
                </button>
            </>
            }
            <div className="home-screen-bottom">
                <button onClick={() => { setIsShop(true); setIsInv(false) }} className={`home-shop-button ${isShop ? "active" : ""}`}><img src={Shop} alt="shop" /></button>
                <button onClick={() => { setIsShop(false); setIsInv(false); }} className={`home-play-button ${!isShop && !isInv ? "active" : ""}`}><img src={Main} alt="shop" /></button>
                <button onClick={() => { setIsShop(false); setIsInv(true) }} className={`home-inventory-button ${isInv ? "active" : ""}`}><img src={Inventory} alt="shop" /></button>
            </div>
        </div>
    );
}

export default HomeScreen;

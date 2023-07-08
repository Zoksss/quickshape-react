import './HomeScreen.scss';
import React from 'react';

import Triangle from "../../shapes/triangle_pix.png"
import Pentagon from "../../shapes/pentagon_pix.png"

import Shop from "../../Icons/shop.png"
import Main from "../../Icons/triangle_small.png"
import Inventory from "../../Icons/backpack.png"

import Coin from "../../Icons/coin_icon.png"
import Gem from "../../Icons/gem.png"

import ShopTheme from './ShopTheme';
import InvTheme from './InvTheme';

const HomeScreen = (props) => {

    const [isShop, setIsShop] = React.useState(false);
    const [isInv, setIsInv] = React.useState(false);

    const styleBack = { backgroundImage: `url("${props.currentTheme.backSRC}")` }
    const styleTop = { backgroundImage: `url("${props.currentTheme.topSRC}")` }
    const styleNav = { backgroundImage: `url("${props.currentTheme.navSRC}")` }
    const styleBtnWide = { backgroundImage: `url("${props.currentTheme.btnWideSRC}")` }
    const styleCenter = { backgroundImage: `url("${props.currentTheme.centerSRC}")` }
 

    return (
        <div className="home-screen-container" style={styleBack}>
            <div className="home-screen-top">
                <div className="nickname" style={styleTop}>
                    <p>Zoks</p>
                </div>
                <div className="top-row2">
                    <div className="coins" style={styleTop}>
                        <img src={Coin} alt="coin" />
                        <p>{props.coins}</p>
                    </div>
                    <div className="gems" style={styleTop}>
                        <img src={Gem} alt="gem" />
                        <p>{props.gems}</p>
                    </div>
                </div>
            </div>

            {isShop && !isInv && <div className="shop-container" >
                <button className="center-shape-image shop-promo" style={styleCenter}>
                    <p className="shop-promo-title">ALPHA THEME</p>
                    <div className="promo-reward-row">
                        <img className="promo-theme-img" src={"themes/ShopIcons/shop_theme_alpha.png"} alt="" />
                        <div className="promo-reward-side">
                            <div><img className="promo-coin-img" src={Coin} alt="" />75</div>
                            <div><img className="promo-gem-img" src={Gem} alt="" />10</div>
                        </div>
                    </div>
                    <p className="shop-promo-desc">CLAIM FOR FREE!</p>
                </button>
                <div className="theme-shop-contianer">
                    <ShopTheme price={props.themesData.find(o=>o.themeName==="SciFi").price} img={props.themesData.find(o=>o.themeName==="SciFi").placeholder} namee={"SciFi"} buyTheme={props.buyTheme} isCheckmark={(props.unlockedThemes.filter(themeName => themeName === "SciFi")).length?true:false}/>
                    <ShopTheme price={props.themesData.find(o=>o.themeName==="Matrix").price} img={props.themesData.find(o=>o.themeName==="Matrix").placeholder} namee={"Matrix"} buyTheme={props.buyTheme} isCheckmark={props.unlockedThemes.filter(themeName => themeName === "Matrix").length?true:false}/>
                    <ShopTheme price={props.themesData.find(o=>o.themeName==="Desert").price} img={props.themesData.find(o=>o.themeName==="Desert").placeholder} namee={"Desert"} gems={true} buyTheme={props.buyTheme} isCheckmark={props.unlockedThemes.filter(themeName => themeName === "Desert").length?true:false}/>
                    <ShopTheme price={props.themesData.find(o=>o.themeName==="Japan").price} img={props.themesData.find(o=>o.themeName==="Desert").placeholder} namee={"Japan"} buyTheme={props.buyTheme} isCheckmark={props.unlockedThemes.filter(themeName => themeName === "Japan").length?true:false}/>
                </div>
            </div>}

            {isInv && !isShop && <div className="inv-container">
                <p className="inv-promo-desc">THEME INVENTROY ({props.unlockedThemes.length}/34)</p>
                <div className="theme-inv-contianer">
                   {props.unlockedThemes.map((themeName, i) => (
            <InvTheme img={props.themesData.find(o=>o.themeName===themeName).placeholder} themeName = {themeName} key={i} equipTheme={props.buyTheme} />))}
                </div>
            </div>}


            {!isShop && !isInv && <>

                <button className="center-shape-image" onClick={() => props.startGame()} style={styleCenter}>
                    <img src={Triangle} alt="circle" />
                    <p>PLAY</p>
                </button>
                <button className="vs-button" style={styleBtnWide}>
                    <img src={Pentagon} alt="circle" />
                    <p>VS</p>
                </button>
            </>
            }
            <div className="home-screen-bottom" style={styleNav}>
                <button onClick={() => { setIsShop(true); setIsInv(false) }} className={`home-shop-button ${isShop ? "active" : ""}`}><img src={Shop} alt="shop" /></button>
                <button onClick={() => { setIsShop(false); setIsInv(false); }} className={`home-play-button ${!isShop && !isInv ? "active" : ""}`}><img src={Main} alt="shop" /></button>
                <button onClick={() => { setIsShop(false); setIsInv(true) }} className={`home-inventory-button ${isInv ? "active" : ""}`}><img src={Inventory} alt="shop" /></button>
            </div>
        </div>
    );
}

export default HomeScreen;

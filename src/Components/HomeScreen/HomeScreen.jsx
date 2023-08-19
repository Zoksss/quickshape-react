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

import { useTransition, animated } from "react-spring"

import themesData from "../utilities/themeData";

const HomeScreen = (props) => {

    const [isShop, setIsShop] = React.useState(false);
    const [isInv, setIsInv] = React.useState(false);

    //const [isShopGenerated, setIsShopGenerated] = React.useState(false);

    const styleBack = { backgroundImage: `url("${props.currentTheme.backSRC}")` }
    const styleTop = { backgroundImage: `url("${props.currentTheme.topSRC}")` }
    const styleNav = { backgroundImage: `url("${props.currentTheme.navSRC}")` }
    const styleBtnWide = { backgroundImage: `url("${props.currentTheme.btnWideSRC}")` }
    const styleCenter = { backgroundImage: `url("${props.currentTheme.centerSRC}")` }

    const transitionMain = useTransition(!isInv && !isShop, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
    });
    const transitionShop = useTransition(!isInv && isShop, {
        from: { x: 150, y: 0, opacity: 0 },
        enter: { x: 0, y: 0, opacity: 1 },
        leave: { x: 150, y: 0, opacity: 0 },
    });
    const transitionInv = useTransition(isInv && !isShop, {
        from: { x: -150, y: 0, opacity: 0 },
        enter: { x: 0, y: 0, opacity: 1 },
        leave: { x: -150, y: 0, opacity: 0 },
    });
    const transitionChangeTheme = useTransition(props.isThemeChange, {
        from: { opacity: 1 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
    });

    // props.unlockedThemes
    function getRandomInt(min, max) {
        return min + Math.floor(Math.random() * (max - min + 1));
    }

    let shopDom = [];
    const generateShop = () => {
        let usedNums = [];
        let shopThemes = [];
        shopDom = [];
        for (let i = 0; i < 4; i++) {
            while (true) {
                let num = getRandomInt(0, 8);
                if (usedNums.filter(numE => numE === num).length > 0) { continue }
                else {
                    shopThemes.push(themesData[num].themeName);
                    usedNums.push(num);
                    break;
                }
            }
        }
        shopDom = shopThemes.map((themeName, i) => {
            return <ShopTheme key={i} price={props.themesData.find(o => o.themeName === themeName).price} img={props.themesData.find(o => o.themeName === themeName).placeholder} namee={themeName} buyTheme={props.buyTheme} isCheckmark={(props.unlockedThemes.filter(themeNamee => themeNamee === themeName)).length > 0 ? true : false} />
        });
    }

    React.useEffect(() => {
        if (props.isThemeChange === true) {
            console.log("chaning theme")
            let interval = null;
            interval = setTimeout(() => {
                props.setIsThemeChange(false);
            }, 1500);
            return () => clearTimeout(interval);
        }
    }, [props.isThemeChange]);

    generateShop();

    return (
        <div className="home-screen-container" style={styleBack} >
            {transitionChangeTheme((style, item) =>
                item ? <animated.div style={style} className="theme-change">
                    <p>LOADING</p>
                </animated.div> : "")}

            <div className="home-screen-top">
                <div className="nickname" style={styleTop}>
                    <p>{props.nickname}</p>
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

            {transitionShop((style, item) =>
                item ? <animated.div style={style} className="shop-container" >
                    {/*<button className="center-shape-image shop-promo" style={styleCenter}>
                        <div className="promo-reward-row">
                            <img className="promo-theme-img" src={"themes/ShopIcons/shop_theme_alpha.png"} alt="" />
                            <div className="promo-reward-side">
                                <div><img className="promo-coin-img" src={Coin} alt="" />75</div>
                                <div><img className="promo-gem-img" src={Gem} alt="" />10</div>
                            </div>
                        </div>
                        <p className="shop-promo-desc">CLAIM FOR FREE!</p>
                    </button>
                    */}
                    <div className="theme-shop-contianer">
                        {shopDom}
                    </div>
                </animated.div> : ""
            )}

            {transitionInv((style, item) =>
                item ? <animated.div style={style} className="inv-container">
                    <p className="inv-promo-desc">THEME INVENTROY ({props.unlockedThemes.length}/34)</p>
                    <div className="theme-inv-contianer">
                        {props.unlockedThemes.map((themeName, i) => (
                            <InvTheme img={props.themesData.find(o => o.themeName === themeName).placeholder} themeName={themeName} key={i} equipTheme={props.buyTheme} />))}
                    </div>
                </animated.div> : ""
            )}


            {transitionMain((style, item) =>
                item ? <animated.div className="home-wrapper" style={style}>

                    <button className="center-shape-image" onClick={() => props.startGame()} style={styleCenter}>
                        <img src={Triangle} alt="circle" />
                        <p>PLAY</p>
                    </button>
                    <button className="vs-button" style={styleBtnWide} onClick={() => {props.setIsVs(true); props.searchForVs()}}>
                        <img src={Pentagon} alt="circle" />
                        <p>VS</p>
                    </button>
                </animated.div> : ""
            )}
            <div className="home-screen-bottom" style={styleNav}>
                <button onClick={() => { setIsShop(true); setIsInv(false);}} className={`home-shop-button ${isShop ? "active" : ""}`}><img src={Shop} alt="shop" /></button>
                <button onClick={() => { setIsShop(false); setIsInv(false); }} className={`home-play-button ${!isShop && !isInv ? "active" : ""}`}><img src={Main} alt="shop" /></button>
                <button onClick={() => { setIsShop(false); setIsInv(true);}} className={`home-inventory-button ${isInv ? "active" : ""}`}><img src={Inventory} alt="shop" /></button>
            </div>
        </div >
    );
}

export default HomeScreen;

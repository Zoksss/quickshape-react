import Coin from "../../Icons/coin_icon.png"
import Gem from "../../Icons/gem.png"

import AlphaTheme from "../../Icons/ShopIcons/shop_theme_alpha.png"

const ShopTheme = (props) => {
    return (
        <button className="theme-shop-button">
            <img className="theme-shop-button-image" src={props.img} alt="" />
            <div className="theme-price">
                <img src={!props.gems?Coin:Gem} alt="" />
                {props.price}
            </div>
        </button>
    );
}

export default ShopTheme;

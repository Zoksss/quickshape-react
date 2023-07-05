import Coin from "../../Icons/coin_icon.png"
import Gem from "../../Icons/gem.png"

const ShopTheme = (props) => {
    return (
        <button className="theme-shop-button" onClick={() => props.buyTheme(props.name)}>
            <img className="theme-shop-button-image" src={props.img} alt="" />
            <div className="theme-price">
                <img src={!props.gems?Coin:Gem} alt="" />
                {props.price}
            </div>
        </button>
    );
}

export default ShopTheme;

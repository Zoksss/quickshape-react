import Coin from "../../Icons/coin_icon.png"
import Gem from "../../Icons/gem.png"
import Checkmark from "../../Icons/checkmark.png"


const ShopTheme = (props) => {
    return (
        <button className="theme-shop-button" onClick={() => props.buyTheme(props.namee)}>
            <img className="theme-shop-button-image" src={process.env.PUBLIC_URL+"/"+props.img} alt="" />
            <div className="theme-price">
                <img src={!props.gems?Coin:Gem} alt="" />
                {!props.isCheckmark?props.price:"OWN"}
            </div>
            {props.isCheckmark && <img  className="theme-checkmark"src={Checkmark} alt="" />}
        </button>
    );
}

export default ShopTheme;

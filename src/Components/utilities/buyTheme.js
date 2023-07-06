// name, coins, gems, unlockedThemes
import themesData from "./themeData.js";

const buyTheme = (themeName, coins, gems, unlockedThemes) => {
    themeName = "SciFi"
    let priceGems = 0, priceCoins = 0;
    let unlockedThemesTemp = unlockedThemes;
    console.log("buying theme")

    let themeObj = themesData.find(o => o.themeName === themeName);
    if (themeObj) {
        if (themeObj.unlocked) console.log("set theme")
        else {
            // buy theme logic
            if (themeObj.gems) {
                if (gems >= themeObj.price) {
                    priceGems = parseInt(themeObj.price);
                    themeObj.unlocked = true;
                    unlockedThemesTemp.push(themeObj.themeName)
                    //saveData();
                }
            } else {
                if (coins >= themeObj.price) {
                    priceCoins = parseInt(themeObj.price);
                    themeObj.unlocked = true;
                    unlockedThemesTemp.push(themeObj.themeName)
                    //saveData();
                }
            }
        }
    }

    return [unlockedThemesTemp, priceCoins, priceGems];
}

export default buyTheme;
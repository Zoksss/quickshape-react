// name, coins, gems, unlockedThemes
import themesData from "./themeData.js";

const buyTheme = (themeName, coins, gems, unlockedThemes) => {
    let priceGems = 0, priceCoins = 0;
    let unlockedThemesTemp = unlockedThemes;
    console.log("buying theme")

    let themeObj = themesData.find(o => o.themeName === themeName);
    if (themeObj) {
        if (unlockedThemes.filter(theme => theme ===themeName).length) return [unlockedThemes, 0, 0, themeObj.themeName];
        else {
            // buy theme logic
            if (themeObj.gems) {
                if (gems >= themeObj.price) {
                    priceGems = parseInt(themeObj.price);
                    unlockedThemesTemp.push(themeObj.themeName)
                    //saveData();
                }
            } else {
                if (coins >= themeObj.price) {
                    priceCoins = parseInt(themeObj.price);
                    unlockedThemesTemp.push(themeObj.themeName)
                    //saveData();
                }
            }
        }
    }

    return [unlockedThemesTemp, priceCoins, priceGems, ""];
}

export default buyTheme;

class Theme {
    constructor(name, backSRC, centerSRC, btnSRC, btnWideSRC, navSRC, topSRC, lineSRC) {
        this.name = name;
        this.backSRC = backSRC;
        this.centerSRC = centerSRC;
        this.btnSRC = btnSRC;
        this.btnWideSRC = btnWideSRC;
        this.navSRC = navSRC;
        this.topSRC = topSRC;
        this.lineSRC = lineSRC;
    }
}

const themes = {
    cherry: new Theme("Cherry",
        "themes/cherry/back.png",
        "themes/cherry/center.png",
        "themes/cherry/btn.png",
        "themes/cherry/btn_wide.png",
        "themes/cherry/nav.png",
        "themes/cherry/top.png",
        "themes/cherry/line.png"
    ),
    science: new Theme("SciFi",
        "themes/science/back.png",
        "themes/science/center.png",
        "themes/science/btn.png",
        "themes/science/btn_wide.png",
        "themes/science/nav.png",
        "themes/science/top.png",
        "themes/science/line.png"
    ),
    dark: new Theme("Dark",
        "themes/dark/back.png",
        "themes/dark/center.png",
        "themes/dark/btn.png",
        "themes/dark/btn_wide.png",
        "themes/dark/nav.png",
        "themes/dark/top.png",
        "themes/dark/line.png"
    ),
    
}

export default themes;

/*
desert: new Theme("Desert",
        "desert",
        "themes/" + this.prefixName + "/back.png",
        "themes/" + this.prefixName + "/center.png",
        "themes/" + this.prefixName + "/btn.png",
        "themes/" + this.prefixName + "/btn_wide.png",
        "themes/" + this.prefixName + "/nav.png",
        "themes/" + this.prefixName + "/top.png",
        "themes/" + this.prefixName + "/line.png"
    ),
    mountain: new Theme("Mountains",
        "mountain",
        "themes/" + this.prefixName + "/back.png",
        "themes/" + this.prefixName + "/center.png",
        "themes/" + this.prefixName + "/btn.png",
        "themes/" + this.prefixName + "/btn_wide.png",
        "themes/" + this.prefixName + "/nav.png",
        "themes/" + this.prefixName + "/top.png",
        "themes/" + this.prefixName + "/line.png"
    ),
    dark: new Theme("Dark",
        "dark",
        "themes/" + this.prefixName + "/back.png",
        "themes/" + this.prefixName + "/center.png",
        "themes/" + this.prefixName + "/btn.png",
        "themes/" + this.prefixName + "/btn_wide.png",
        "themes/" + this.prefixName + "/nav.png",
        "themes/" + this.prefixName + "/top.png",
        "themes/" + this.prefixName + "/line.png"
    ),
    matrix: new Theme("Matrix",
        "matrix",
        "themes/" + this.prefixName + "/back.png",
        "themes/" + this.prefixName + "/center.png",
        "themes/" + this.prefixName + "/btn.png",
        "themes/" + this.prefixName + "/btn_wide.png",
        "themes/" + this.prefixName + "/nav.png",
        "themes/" + this.prefixName + "/top.png",
        "themes/" + this.prefixName + "/line.png"
    ),
    cherry: new Theme("Cherry",
        "cherry",
        "themes/" + this.prefixName + "/back.png",
        "themes/" + this.prefixName + "/center.png",
        "themes/" + this.prefixName + "/btn.png",
        "themes/" + this.prefixName + "/btn_wide.png",
        "themes/" + this.prefixName + "/nav.png",
        "themes/" + this.prefixName + "/top.png",
        "themes/" + this.prefixName + "/line.png"
    ),
    japan: new Theme("Japan",
        "Japan",
        "themes/" + this.prefixName + "/back.png",
        "themes/" + this.prefixName + "/center.png",
        "themes/" + this.prefixName + "/btn.png",
        "themes/" + this.prefixName + "/btn_wide.png",
        "themes/" + this.prefixName + "/nav.png",
        "themes/" + this.prefixName + "/top.png",
        "themes/" + this.prefixName + "/line.png"
    ),

*/
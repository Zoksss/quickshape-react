
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
    basic: new Theme("Basic",
        "themes/basic/back.png",
        "themes/basic/center.png",
        "themes/basic/btn.png",
        "themes/basic/btn_wide.png",
        "themes/basic/nav.png",
        "themes/basic/top.png",
        "themes/basic/line.png"
    ),
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
    matrix: new Theme("Matrix",
        "themes/matrix/back.png",
        "themes/matrix/center.png",
        "themes/matrix/btn.png",
        "themes/matrix/btn_wide.png",
        "themes/matrix/nav.png",
        "themes/matrix/top.png",
        "themes/matrix/line.png"
    ),
    desert: new Theme("Desert",
        "themes/desert/back.png",
        "themes/desert/center.png",
        "themes/desert/btn.png",
        "themes/desert/btn_wide.png",
        "themes/desert/nav.png",
        "themes/desert/top.png",
        "themes/desert/line.png"
    ),
    mountain: new Theme("Mountains",
        "themes/mountain/back.png",
        "themes/mountain/center.png",
        "themes/mountain/btn.png",
        "themes/mountain/btn_wide.png",
        "themes/mountain/nav.png",
        "themes/mountain/top.png",
        "themes/mountain/line.png"
    ),
    japan: new Theme("Japan",
        "themes/japan/back.png",
        "themes/japan/center.png",
        "themes/japan/btn.png",
        "themes/japan/btn_wide.png",
        "themes/japan/nav.png",
        "themes/japan/top.png",
        "themes/japan/line.png"
    ),
}

export default themes;

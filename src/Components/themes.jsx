
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
    basic: new Theme("Cherry",
        "../themes/cherry/back.png",
        "../themes/cherry/center.png",
        "../themes/cherry/btn.png",
        "../themes/cherry/btn_wide.png",
        "../themes/cherry/nav.png",
        "../themes/cherry/top.png",
        "../themes/cherry/line.png"
    )
}

export default themes;

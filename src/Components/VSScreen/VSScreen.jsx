import './VSScreen.scss';
import React from 'react';

import Triangle from "../../shapes/triangle_pix.png"
import Pentagon from "../../shapes/pentagon_pix.png"

const VSScreen = (props) => {

    const styleBack = { backgroundImage: `url("${props.currentTheme.backSRC}")` }
    const styleBtn = { backgroundImage: `url("${props.currentTheme.btnSRC}")` }

    return (
        <div className="vs-screen" style={styleBack}>
            <div className="vs-screen-player-row">
                <img src={Triangle} alt="" />
                <p>{props.nickname} (YOU)</p>
            </div>
            <div className="vs-screen-player-row">
                <img src={Pentagon} alt="" />
                <p>{props.oponentNicknameState !== "" ? props.oponentNicknameState : "SEARCHING..."}</p>
            </div>
            {props.oponentNicknameState === "" && <button className="vs-screen-cancel" onClick={() => {props.cancelSearch(); props.setIsVs(false) }} style={styleBtn}>CANCEL</button>}        </div>
    );
}

export default VSScreen;

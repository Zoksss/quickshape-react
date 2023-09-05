import './VSScreen.scss';
import React from 'react';

import Triangle from "../../shapes/triangle_pix.png"
import Pentagon from "../../shapes/pentagon_pix.png"

import ServerOffline from "../../Icons/offline.png"
import ServerOnline from "../../Icons/online.png"

const VSScreen = (props) => {

    const styleBack = { backgroundImage: `url("${process.env.PUBLIC_URL + "/" + props.currentTheme.backSRC}")` }
    const styleBtn = { backgroundImage: `url("${process.env.PUBLIC_URL + "/" + props.currentTheme.btnSRC}")` }



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
            {props.oponentNicknameState === "" && <button className="vs-screen-cancel" onClick={() => { props.cancelSearch(); props.setIsVs(false) }} style={styleBtn}>CANCEL</button>}
            <div className="vs-server-status">
                <img src={ServerOffline} alt="" />
                <p>SERVER OFFLINE</p>
            </div>
        </div>
    );
}

export default VSScreen;

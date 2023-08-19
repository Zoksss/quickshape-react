import './VSScreen.scss';
import React from 'react';

import Triangle from "../../shapes/triangle_pix.png"
import Pentagon from "../../shapes/pentagon_pix.png"

const VSScreen = (props) => {

    return (
        <div className="vs-screen">
            <div className="vs-screen-player-row">
                <img src={Triangle} alt="" />
                <p>{props.nickname} (YOU)</p>
            </div>
            <div className="vs-screen-player-row">
                <img src={Pentagon} alt="" />
                <p>{props.oponentNickname !== "" ? props.oponentNickname : "SEARCHING..."}</p>
            </div>
            <button className="vs-screen-cancel" onClick={() => { props.setIsVs(false) }}>CANCEL</button>
        </div>
    );
}

export default VSScreen;

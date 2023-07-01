import './EndScreen.scss';
import React from 'react';




const EndScreen = (props) => {
    return (
        <div className="end-screen-container">
            This is the end screen / 
            {Math.floor((props.timeAvg/1000)%60).toString().slice(-2)}.{((props.timeAvg/10)%100).toString().slice(-3)}
        </div>
    );
}

export default EndScreen;

import './NicknameEnter.scss';
import React from 'react';

const NicknameEnter = (props) => {

    const inputRef = React.useRef(null);

    return (
        <div className="enter-nickname">
            <p>ENTER YOUR USERNAME</p>
            <input ref={inputRef}  name="nick" type="text" id="" maxLength={8}/>
            <button onClick={() => props.setNickname(inputRef.current.value) }>ENTER</button>
        </div>
    );
}

export default NicknameEnter;

import React from 'react';
import {Link} from "react-router-dom";

const GameWin = () => {
    return (
        <div className="gameOver">
            <h1>YOU OWN THIS TOWN. YOU WON!</h1>
            <Link to="/">
                <button className="gameOverBtn rollBtn">START NEW GAME</button>
            </Link>
        </div>
    );
};

export default GameWin;
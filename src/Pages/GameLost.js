import React, {useEffect} from 'react';
import {Link} from "react-router-dom";

const GameLost = () => {
        return (
        <div className="gameOver">
            <h1>YOU LOST ALL YOUR MONEY</h1>
            <Link to="/">
                <button className="gameOverBtn rollBtn">START NEW GAME</button>
            </Link>
        </div>
    );
};

export default GameLost;
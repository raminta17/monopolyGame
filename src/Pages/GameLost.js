import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {startNewGame} from "../features/player";


const GameLost = () => {

    // const player = useSelector(state => state.player);
    // const dispatch = useDispatch();
    // dispatch(startNewGame);
    // useEffect(() => {
    //     console.log(player)
    // }, [player]);

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
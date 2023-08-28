import React from 'react';
import {useSelector} from "react-redux";
import GameBoard from "../components/GameBoard";
import PlayerCard from "../components/PlayerCard";

const GamePage = () => {

    const player = useSelector(state => state.player);


    return (
        <div className="gamePage">
            <GameBoard/>
            <PlayerCard/>
        </div>

    );
};

export default GamePage;
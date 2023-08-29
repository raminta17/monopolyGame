import React from 'react';
import GameBoard from "../components/GameBoard";
import PlayerCard from "../components/PlayerCard";

const GamePage = () => {

    return (
        <div className="gamePage">
            <GameBoard/>
            <PlayerCard/>
        </div>

    );
};

export default GamePage;
import React from 'react';
import {useSelector} from "react-redux";

const PlayerCard = () => {

    const player = useSelector(state => state.player);

    return (
        <div className="playerCard">
            <h3>MONEY: {player.money}$</h3>
            <div>
                {player.boughtStreets.map((street,index) =>
                    <div className="boughtStreet" style={{backgroundColor:street.color}} key={index}>
                    <h4>{street.name}</h4>
                        <button>SELL (+{street.price/2}$)</button>
                </div>)}
            </div>
        </div>
    );
};

export default PlayerCard;
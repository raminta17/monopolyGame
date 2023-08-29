import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addMoney, removeStreet} from "../features/player";

const PlayerCard = () => {

    const player = useSelector(state => state.player);
    const dispatch = useDispatch();

    function sellStreet(street) {
        console.log(street)
        dispatch(addMoney(street.price / 2))
        dispatch(removeStreet(street.name))
    }

    return (
        <div className="playerCard">
            <h3>MONEY: {player.money}$</h3>
            <div>
                {player.boughtStreets.map((street, index) =>
                    <div className="boughtStreet" style={{backgroundColor: street.color}} key={index}>
                        <h4>{street.name}</h4>
                        <button className="sellBtn" onClick={() => sellStreet(street)}>SELL (+{street.price / 2}$)
                        </button>
                    </div>)}
            </div>
        </div>
    );
};

export default PlayerCard;
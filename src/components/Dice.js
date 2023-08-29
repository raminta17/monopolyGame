import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {updatePosition, addMoney} from "../features/player";


const Dice = ({setError}) => {

    const dice = [
        {
            dice: 1,
            image: 'https://static.thenounproject.com/png/4387558-200.png'
        },
        {
            dice: 2,
            image: 'https://static.thenounproject.com/png/4387564-200.png'
        },
        {
            dice: 3,
            image: 'https://static.thenounproject.com/png/4387559-200.png'
        },
        {
            dice: 4,
            image: 'https://static.thenounproject.com/png/4387557-200.png'
        },
        {
            dice: 5,
            image: 'https://static.thenounproject.com/png/1194690-200.png'
        },
        {
            dice: 6,
            image: 'https://static.thenounproject.com/png/4387562-200.png'
        },
    ]
    const [rolledValue, setRolledValue] = useState();
    const dispatch = useDispatch();
    const player = useSelector(state=>state.player);
    function rollDice() {
        setError();
        let randomNum = Math.floor(Math.random()*6)+1;
        let position = player.position + randomNum;
        setRolledValue(randomNum);
        if(position >=24) {
           position = position % 24;
           dispatch(addMoney(200))
        }
        dispatch(updatePosition(position))
    }

    return (
        <div className="diceCont">
            <div>
                {rolledValue && <img className="diceImg" src={dice[rolledValue-1].image}/>}
            </div>
            <button className="rollBtn" onClick={rollDice}>ROLL DICE</button>
        </div>
    );
};

export default Dice;
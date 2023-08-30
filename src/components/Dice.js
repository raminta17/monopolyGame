import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {updatePosition, addMoney, subtractMoney, startNewGame} from "../features/player";
import {useNavigate} from "react-router-dom";


const Dice = ({error, setError, taxBoxes, chanceSquares}) => {
    const nav = useNavigate();
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
    const player = useSelector(state => state.player);

    function rollDice() {
        setError();
        let randomNum = Math.floor(Math.random() * 6) + 1;
        let position = player.position + randomNum;
        setRolledValue(randomNum);
        if (position >= 24) {
            position = position % 24;
            dispatch(addMoney(200))
        }
        taxBoxes.map(taxBox => {
            if (position === Number(taxBox.id)) {
                setError(`YOU HAD TO PAY INCOME TAX ${taxBox.cost}$.`)
                dispatch(subtractMoney(taxBox.cost))
            }
        })

        chanceSquares.map(chanceSquare => {
                if (position === Number(chanceSquare.id)) {
                    let randomChance = Math.floor(Math.random() * chanceSquare.chance * 2 + 1) - chanceSquare.chance;
                    if (randomChance > 0) {
                        dispatch(addMoney(randomChance));
                        setError(`YOU WON ${randomChance}$!`)
                    }
                    if (randomChance < 0) {
                        dispatch(subtractMoney(Math.abs(randomChance)))
                        setError(`YOU LOST ${Math.abs(randomChance)}$. BETTER LUCK NEXT TIME`);

                    }
                    if (randomChance === 0) {
                        setError('NOTHING TO WIN, NOTHING TO LOSE')
                    }
                }
            }
        )
        dispatch(updatePosition(position))
    }

    useEffect(() => {
        if (player.money < 0) {
            dispatch(startNewGame('newGame'))
            nav("/gameLost")
        }
    }, [player.money]);
    return (
        <div className="diceCont">
            <div>
                {rolledValue && <img className="diceImg" src={dice[rolledValue - 1].image}/>}
            </div>
            {/*{error === `YOU LOST ALL YOUR MONEY.` ? <button className="gameOverBtn rollBtn">START NEW GAME</button>*/}
            {/*    : <button className="rollBtn" onClick={rollDice}>ROLL DICE</button>}*/}
            <button className="rollBtn" onClick={rollDice}>ROLL DICE</button>
        </div>
    );
};

export default Dice;
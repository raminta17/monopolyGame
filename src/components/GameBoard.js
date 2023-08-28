import React from 'react';
import Dice from "./Dice";
import {useDispatch, useSelector} from "react-redux";
import {addStreet, subtractMoney} from "../features/player";


const GameBoard = () => {
    const player = useSelector(state=> state.player);
    const dispatch = useDispatch();
    const gameBoard = [
        {
            id: 'start',
            name: 'START'
        },
        {
            id: '1',
            name: "Meadowbrook Lane",
            color: "Blue",
            price: 10
        },
        {
            id: '2',
            name: "Sunset Avenue",
            color: "Red",
            price: 20
        },
        {
            id: '3',
            name: "Maplewood Street",
            color: "Green",
            price: 30
        },
        {
            id: '4',
            name: "Pinecrest Road",
            color: "Yellow",
            price: 40
        },
        {
            id: '5',
            name: "Cherrywood Lane",
            color: "Purple",
            price: 50
        },
        {
            id: 'rest1',
            name: 'REST'
        },
        {
            id: '6',
            name: "Willowside Boulevard",
            color: "Orange",
            price: 55
        },
        {
            id: '7',
            name: "Birchwood Avenue",
            color: "Pink",
            price: 60
        },
        {
            id: '8',
            name: "Cedar Court",
            color: "Brown",
            price: 65
        },
        {
            id: '9',
            name: "Elmwood Way",
            color: "Gray",
            price: 70
        },
        {
            id: '10',
            name: "Rosewood Terrace",
            color: "Cyan",
            price: 75
        },

        {
            id: 'rest2',
            name: 'REST'
        },
        {
            id: '11',
            name: "Sycamore Road",
            color: "Magenta",
            price: 80
        },
        {
            id: '12',
            name: "Lakeshore Lane",
            color: "Turquoise",
            price: 90
        },
        {
            id: '13',
            name: "Juniper Street",
            color: "Lime",
            price: 100
        },
        {
            id: '14',
            name: "Hawthorn Avenue",
            color: "Indigo",
            price: 110
        },
        {
            id: '15',
            name: "Riverfront Drive",
            color: "Teal",
            price: 120
        },
        {
            id: 'rest3',
            name: 'REST'
        },
        {
            id: '16',
            name: "Redwood Ridge Road",
            color: "Olive",
            price: 125
        },
        {
            id: '17',
            name: "Aspen Grove Lane",
            color: "Maroon",
            price: 130
        },
        {
            id: '18',
            name: "Magnolia Avenue",
            color: "Silver",
            price: 140
        },
        {
            id: '19',
            name: "Oakridge Terrace",
            color: "Gold",
            price: 145
        },
        {
            id: '20',
            name: "Willowbrook Street",
            color: "Navy",
            price: 150
        }


    ]
    console.log(player.boughtStreets);

    function buyStreet(name) {
        let boughtStreet = gameBoard.find((street) => street.name === name);
        if(player.money >= boughtStreet.price) {
            dispatch(subtractMoney(boughtStreet.price))
            dispatch(addStreet(boughtStreet));
        }

    }
    return (
        <div className="gameBoard">
            {gameBoard.map((gameDiv,index) => {
                return <div
                    key={index}
                    style={{gridArea: 'div'+gameDiv.id}}
                    className="gameDiv"
                    id={index}
                >
                    <div>
                        {'color' in gameDiv && <div className="streetColor" style={{backgroundColor: gameDiv.color}}></div>}
                        <h4>{gameDiv.name}</h4>
                        {player.position === index &&
                            <div>
                                <img className="playerFigure" src={player.figure.image}/>
                                {/*neveikia tikrinimas ar yra tokia jau nupirkta gatve*/}
                                {'price' in gameDiv && !player.boughtStreets.some(street=> street.name === gameDiv.street) && <button onClick={() =>buyStreet(gameDiv.name)}>BUY</button>}
                            </div>
                          }
                    </div>
                    {'price' in gameDiv && <h5 className="price">{gameDiv.price}$</h5>}
                </div>
            })}
            <Dice/>
        </div>
    );
};

export default GameBoard;
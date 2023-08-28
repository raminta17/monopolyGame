import React from 'react';
import {useSelector} from "react-redux";
import {useState} from "react";

const GamePage = () => {

    const player = useSelector(state => state.player);
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
    /*const gameboardMap = [
        'start', 1, 2, 3, 4, 5, 'rest',
        20, 0, 0, 0, 0, 0, 6,
        19, 0, 0, 0, 0, 0, 7,
        18, 0, 0, 0, 0, 0, 8,
        17, 0, 0, 0, 0, 0, 9,
        16, 0, 0, 0, 0, 0, 10,
        'rest', 15, 14, 13, 12, 11, 'rest']*/


    return (
        <div className="gameBoard">
            {/*{gameboardMap.map((position, positionIndex) => {*/}
            {/*    if (position === 0) return <div key={positionIndex}></div>;*/}
            {/*    return gameBoard.map((gameBox, gameBoxIndex) => {*/}
            {/*                if (gameBox.id === position) {*/}
            {/*                    return <div className="gameDiv" key={positionIndex} id={position}>*/}
            {/*                        <div>*/}
            {/*                            {'color' in gameBox && <div className="streetColor" style={{backgroundColor: gameBox.color}}></div>}*/}
            {/*                            <h4>{gameBox.name}</h4>*/}
            {/*                        </div>*/}
            {/*                        {'price' in gameBox && <h5 className="price">{gameBox.price}$</h5>}*/}
            {/*                    </div>*/}
            {/*                }*/}
            {/*        })*/}
            {/*})}*/}

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
                    </div>
                    {'price' in gameDiv && <h5 className="price">{gameDiv.price}$</h5>}
                </div>
            })}

        </div>
    );
};

export default GamePage;
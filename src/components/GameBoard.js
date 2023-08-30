import React, {useState} from 'react';
import Dice from "./Dice";
import BoardSquare from "./BoardSquare";


const GameBoard = () => {

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
        // {
        //     id: '4',
        //     name: "Pinecrest Road",
        //     color: "Yellow",
        //     price: 40
        // },
        {
            id: '4',
            name: "INCOME TAX",
            cost: 200
        },
        {
            id: '5',
            name: "Cherrywood Lane",
            color: "Purple",
            price: 50
        },
        {
            id: '6',
            name: 'CHANCE',
            chance: 100
        },
        {
            id: '7',
            name: "Willowside Boulevard",
            color: "Orange",
            price: 55
        },
        {
            id: '8',
            name: "Birchwood Avenue",
            color: "Pink",
            price: 60
        },
        {
            id: '9',
            name: "Cedar Court",
            color: "Brown",
            price: 65
        },
        {
            id: '10',
            name: "Elmwood Way",
            color: "Gray",
            price: 70
        },
        {
            id: '11',
            name: "Rosewood Terrace",
            color: "Cyan",
            price: 75
        },

        {
            id: '12',
            name: 'REST'
        },
        {
            id: '13',
            name: "Sycamore Road",
            color: "Magenta",
            price: 80
        },
        {
            id: '14',
            name: "Lakeshore Lane",
            color: "Turquoise",
            price: 90
        },
        {
            id: '15',
            name: "Juniper Street",
            color: "Lime",
            price: 100
        },
        {
            id: '16',
            name: "Hawthorn Avenue",
            color: "Indigo",
            price: 110
        },
        {
            id: '17',
            name: "Riverfront Drive",
            color: "Teal",
            price: 120
        },
        {
            id: '18',
            name: 'CHANCE',
            chance: 100
        },
        {
            id: '19',
            name: "Redwood Ridge Road",
            color: "Olive",
            price: 125
        },
        {
            id: '20',
            name: "Aspen Grove Lane",
            color: "Maroon",
            price: 130
        },
        {
            id: '21',
            name: "Magnolia Avenue",
            color: "Silver",
            price: 140
        },
        {
            id: '22',
            name: "INCOME TAX",
            cost: 200
        },
        {
            id: '23',
            name: "Willowbrook Street",
            color: "Navy",
            price: 150
        }


    ]
    const [error, setError] = useState();

    const taxBoxes = gameBoard.filter(street => 'cost' in street);
    const chanceSquares = gameBoard.filter(square => 'chance' in square);


    return (
        <div className="gameBoard">
            {gameBoard.map((gameDiv, index) => {
              return  <BoardSquare
                    key={index}
                    index={index}
                    gameDiv={gameDiv}
                    gameBoard={gameBoard}
                    setError={setError}
                />

            })}
            <div className="boardCentre" style={{gridArea: 'centre'}}>
                <img className="monopoly"
                     src="https://i.pinimg.com/originals/2c/48/75/2c48755938d4e51ca8f76ced8b3912af.png" alt=""/>
                <div className="error">{error && error}</div>
                <Dice error={error} setError={setError} taxBoxes={taxBoxes} chanceSquares={chanceSquares}/>
            </div>

        </div>
    );
};

export default GameBoard;
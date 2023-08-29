import React from 'react';
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {chooseFigure} from "../features/player";


const StartGamePage = () => {
    const dispatch = useDispatch();
    const playerFigures = [
        {
            name: 'wheelbarrow',
            image: 'https://www.wftv.com/resizer/xOiMzBBeKVMPOq6UgRUKGMeqY6Y=/arc-anglerfish-arc2-prod-cmg/public/4GXOSY6CWZASFBVCU5XGNKLQKI.png'
        },
        {
            name: 'hat',
            image: 'https://fox8.com/wp-content/uploads/sites/12/2022/04/Hat.png?w=1500'
        },
        {
            name: 'shoe',
            image: 'https://fox8.com/wp-content/uploads/sites/12/2022/04/Boot.png'
        },
        {
            name: 'iron',
            image: 'https://www.wftv.com/resizer/ga_-NI_y_BmgAbbp78eUtboki5w=/arc-anglerfish-arc2-prod-cmg/public/H2JAE62D4RA4HFQOSYOFQHJOFM.png'
        },
        {
            name: 'ship',
            image: 'https://fox8.com/wp-content/uploads/sites/12/2022/04/BattleShip-Copy.png'
        },
        {
            name: 'thimble',
            image: 'https://cloudfront-us-east-1.images.arcpublishing.com/cmg/E7H6MZCC2JDCPADRNPV7LICVPQ.png'
        },
        {
            name: 'car',
            image: 'https://i0.wp.com/www.actionfigureinsider.com/wpress/wp-content/uploads/2022/05/Car.png?fit=800%2C640'
        },
        {
            name: 'dog',
            image: 'https://www.geekslop.com/wp-content/uploads/2022/04/Scotty.png'
        }
    ]
    const nav = useNavigate();

    function startGame(chosenIndex) {
        const chosenFigure = playerFigures.find((figure,index)=> index === chosenIndex);
        dispatch(chooseFigure(chosenFigure))
        nav("/game")
    }

    return (
        <div className="startGame">
            <div>
                <img className="monopoly" src="https://i.pinimg.com/originals/2c/48/75/2c48755938d4e51ca8f76ced8b3912af.png" alt=""/>
            </div>
            <div><h4>CHOOSE YOUR FIGURE TO START THE GAME</h4></div>
            <div className="figuresCont">
                {playerFigures.map((figures, index) =>

                    <div onClick={() => startGame(index)} key={index}>
                        <img src={figures.image}/>
                    </div>
                )}
            </div>
        </div>
    );
};

export default StartGamePage;
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { chooseFigure } from '../features/player'
import figure1 from '../assets/figure1.png'
import figure2 from '../assets/hat.webp'
import figure3 from '../assets/Boot.webp'
import figure4 from '../assets/iron.avif'
import figure5 from '../assets/ship.webp'
import figure6 from '../assets/thimble.png'
import figure7 from '../assets/Car.webp'

const StartGamePage = () => {
	const dispatch = useDispatch()
	const nav = useNavigate()
	const playerFigures = [
		{
			name: 'wheelbarrow',
			image: figure1,
		},
		{
			name: 'hat',
			image: figure2,
		},
		{
			name: 'shoe',
			image: figure3,
		},
		{
			name: 'iron',
			image: figure4,
		},
		{
			name: 'ship',
			image: figure5,
		},
		{
			name: 'thimble',
			image: figure6,
		},
		{
			name: 'car',
			image: figure7,
		},
	]

	function startGame(chosenIndex) {
		const chosenFigure = playerFigures.find(
			(figure, index) => index === chosenIndex,
		)
		dispatch(chooseFigure(chosenFigure))
		nav('/game')
	}

	return (
		<main>
			<div className='startGame'>
				<div>
					<img
						className='monopoly'
						src='https://i.pinimg.com/originals/2c/48/75/2c48755938d4e51ca8f76ced8b3912af.png'
						alt=''
					/>
				</div>
				<div>
					<h4>CHOOSE YOUR FIGURE TO START THE GAME</h4>
				</div>
				<div className='figuresCont'>
					{playerFigures.map((figures, index) => (
						<div onClick={() => startGame(index)} key={index}>
							<img src={figures.image} />
						</div>
					))}
				</div>
			</div>
		</main>
	)
}

export default StartGamePage

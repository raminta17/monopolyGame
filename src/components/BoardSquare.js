import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addStreet, subtractMoney } from '../features/player'

const BoardSquare = ({ gameDiv, index, gameBoard, setError }) => {
	const player = useSelector(state => state.player)
	const dispatch = useDispatch()
	const streetSelected = player.boughtStreets.some(
		street => street.name === gameDiv.name,
	)

	function buyStreet(name) {
		let boughtStreet = gameBoard.find(street => street.name === name)
		if (
			player.money >= boughtStreet.price &&
			!player.boughtStreets.some(street => street.name === boughtStreet.name)
		) {
			dispatch(subtractMoney(boughtStreet.price))
			dispatch(addStreet(boughtStreet))
		}
		if (player.money < boughtStreet.price) return setError('NOT ENOUGH MONEY')
	}

	return (
		<div
			style={{ gridArea: 'box' + gameDiv.id }}
			className='gameDiv'
			id={gameDiv.name}
		>
			<div>
				{'color' in gameDiv && (
					<div
						className='streetColor'
						style={{ backgroundColor: gameDiv.color }}
					></div>
				)}
				<h4>{gameDiv.name}</h4>
			</div>
			{player.position === index && (
				<div className='activeCard' onClick={() => buyStreet(gameDiv.name)}>
					{'price' in gameDiv &&
						player.position === index &&
						!streetSelected && <button className='buyBtn'>BUY</button>}
					<img className='playerFigure' src={player.figure.image} />
					{'price' in gameDiv && !streetSelected && (
						<h5 className='price'>{gameDiv.price}$</h5>
					)}
				</div>
			)}
			{'chance' in gameDiv && (
				<h2>
					<i className='fa-solid fa-dice'></i>
				</h2>
			)}
			{gameDiv.id === 'start' && (
				<h2>
					<i className='fa-regular fa-hand-point-right'></i>
				</h2>
			)}
			{gameDiv.name === 'REST' && (
				<h2>
					<i className='fa-solid fa-book-open'></i>
				</h2>
			)}
			{'cost' in gameDiv && <h3>{gameDiv.cost}$</h3>}
			{'price' in gameDiv && !streetSelected && (
				<h5 className='price'>{gameDiv.price}$</h5>
			)}
			{'price' in gameDiv && streetSelected && (
				<h5 className='price owned'>OWNED</h5>
			)}
		</div>
	)
}

export default BoardSquare

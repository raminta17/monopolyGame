import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import GameBoard from '../components/GameBoard'
import PlayerCard from '../components/PlayerCard'

const GamePage = () => {
	const player = useSelector(state => state.player)
	const nav = useNavigate()

	useEffect(() => {
		if (!player.figure) nav('/')
	}, [])

	return (
		<div className='gamePage'>
			<GameBoard />
			<PlayerCard />
		</div>
	)
}

export default GamePage

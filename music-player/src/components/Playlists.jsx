import React from 'react'

import Card from './Card'

import playlists from '../data/playlistHome'

const Playlists = props => {
	const dataPlaylists = playlists

	let matchedPlaylists = dataPlaylists
		.filter(playlist => playlist.category_id === props.category_id)
		.slice(0, props.limiter)

	return (
		<div className="cardsWrapInner">
			{matchedPlaylists.map((playlist, id) => (
				<Card key={id} id={id} link={`/playlist/` + playlist.id} img={playlist.img} name={playlist.name} desc={playlist.desc} />
			))}
		</div>
	)
}

export default Playlists

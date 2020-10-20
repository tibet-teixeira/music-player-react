import React from 'react'
import { useParams } from 'react-router-dom'

import Song from '../components/Song'

import { ReactComponent as PlayIcon } from '../svgs/play.svg'
import { ReactComponent as HeartIcon } from '../svgs/heart.svg'

import playlists from '../data/playlists'


const PlaylistPage = () => {
	let { id } = useParams()

	const matchedPlaylist = playlists
		.filter(playlist => playlist.id === +id)[0]

	return (
		<div className="playlistPage">
			<div className="mainInner">
				<div className="playlistPageInfo">
					<div className="playlistPageImage">
						<img
							src={matchedPlaylist.img}
							alt="pic"
						/>
					</div>
					<div className="playlistPageContent">
						<p className="smallText uppercase bold">Playlist</p>
						<h1>{matchedPlaylist.name}</h1>

						<p className="tagline">{matchedPlaylist.desc}</p>
						<div className="playlistPageDesc">
							<p className="spotify">{matchedPlaylist.owner}</p>
							<span>{matchedPlaylist.likes} likes</span>
							<span>{matchedPlaylist.fulltime}</span>
						</div>
					</div>
				</div>
				<div className="playlistPageSongs">
					<div className="playlistButtons">
						<span className="playIcon">
							<PlayIcon />
						</span>
						<div className="icons">
							<div className="icon iconsHeart">
								<HeartIcon />
							</div>
							<div className="icon iconsDots"></div>
						</div>
					</div>

					<ul className="songList">
						{matchedPlaylist.songs.map((song, id) => {
							return <Song key={id} songName={song.name} songArtist={song.artist} songTime={song.time} />
						})}
					</ul>
				</div>
			</div>
		</div>
	)
}

export default PlaylistPage

import React from 'react'

import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';

import { ReactComponent as SpotifyIcon } from '../svgs/spotify-logo.svg'

import routes from '../routes/routes'

const SideBar = () => {
	const location = useLocation()

	return (
		<div className="navBar">
			<div className="logo">
				<SpotifyIcon />
			</div>
			<ul>
				{
					routes.map(route => {
						return (
							<Link to={route.link}>
								<li className={location.pathname === route.link ? 'active' : ''}>
									<svg viewBox="0 0 512 512" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
										<path d={route.icon}></path>
									</svg>
									{route.name}
								</li>
							</Link>
						)
					})
				}

			</ul>
		</div>
	)
}

export default SideBar

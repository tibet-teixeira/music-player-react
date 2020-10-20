import React from 'react'

import SideBar from './components/SideBar'
import Player from './components/Player'

import Home from './screens/Home'

import './App.scss'

const App = () => {
	return (
		<div className="outerWrap">
			<div className="App">
				<SideBar />
				<Home />
			</div>
			<div className="musicControls">
				<Player />
			</div>
		</div>
	)
}

export default App

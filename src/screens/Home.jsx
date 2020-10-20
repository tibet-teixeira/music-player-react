import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Button from '@material-ui/core/Button'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import ArrowFowardIosIcon from '@material-ui/icons/ArrowForwardIos'

import Playlist from './Playlist'

import Categories from '../components/Categories'
import Search from '../components/Search'

const Home = () => {
	return (
		<div className="main">
			<div className="upperNav">
				<Button><ArrowBackIosIcon className='iconMain' /></Button>
				<Button><ArrowFowardIosIcon className='iconMain' /></Button>
			</div>
			<div className="mainContent">
				<Switch>
					<Route path="/" exact component={Categories} />
					<Route path="/search" component={Search} />
					<Route path="/your-library" component={Categories} />
					<Route path="/playlist/:id" component={Playlist} />
				</Switch>
			</div>
		</div>
	)
}

export default Home

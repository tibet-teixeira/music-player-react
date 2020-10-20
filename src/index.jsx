import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router } from 'react-router-dom'

import * as serviceWorker from './serviceWorker'
import App from './App'
import './index.css'

ReactDOM.render(
	<React.StrictMode>
		<Router basename="/">
			<App />
		</Router>
	</React.StrictMode>,
	document.getElementById('root')
)

serviceWorker.unregister()

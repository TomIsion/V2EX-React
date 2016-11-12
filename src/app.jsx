import React from 'react'
import ReactDOM from 'react-dom'

import Header from './components/header/header'
import Main from './components/main/main'
// import Nav from './components/nav'

const App = () =>
(
	<div>
		<Header />
		<Main />
	</div>
)

ReactDOM.render(<App />, document.getElementById('App'))

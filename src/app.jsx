import React from 'react'
import ReactDOM from 'react-dom'

import Header from './components/header/header.jsx'
// import Main from './components/main/main.jsx'
// import Nav from './components/nav'

class App extends React.Component {
	render() {
		return (
			<div>
				<Header />
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('App'))
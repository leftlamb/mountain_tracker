import React from 'react';
import './App.css';
import {createUseStyles} from 'react-jss'
import {Header, Container, Footer} from './components'

const useStyles = createUseStyles({
	app: {
		margin: 0,
		padding: 0,
	},
})

const App = () => {
	const classes = useStyles()
	return (
		<div className={classes.app}>
			<Header/>
			<Container/>
			<Footer/>
		</div>
	);
}

export default App;

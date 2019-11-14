import React from 'react';
import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
	container: {
        height: '80px',
        width: '100%',
        backgroundColor: 'gold'
	}
})

export const Header = () => {
	const classes = useStyles()
	return (
		<div className={classes.container}>

		</div>
	);
}

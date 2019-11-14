import React from 'react';
import {createUseStyles} from 'react-jss'


const useStyles = createUseStyles({
	container: {
		
	}
})

export const Container = () => {
	const classes = useStyles()
	return (
		<div className={classes.container}>
            
		</div>
	);
}

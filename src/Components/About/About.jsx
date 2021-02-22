import React from 'react'
import AboutStyles from './AboutStyles'

const About = () => {
	const classes = AboutStyles();
	return (
		<div className={classes.size}>
			<h1>About</h1>
		</div>
	)
}

export default About;
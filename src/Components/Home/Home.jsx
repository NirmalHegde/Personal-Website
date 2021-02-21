import React from 'react'

import HomeStyles from './HomeStyles'

const Home = () => {
	const classes = HomeStyles();
	return (
		<div className={classes.size}>
			<br /><br /><br />
			<h1>Home</h1>
		</div>
	)
}

export default Home;
import React from 'react'
import { Grid } from '@material-ui/core'

import HomeStyles from './HomeStyles'

const Home = () => {
	const classes = HomeStyles();
	return (
		<div className={classes.size}>
			<Grid container>
				<Grid item xs={12}>
					<br /><br /><br />
				</Grid>
				<Grid item xs={1}></Grid>
				<Grid item container xs={10}>
					<Grid item xs={6}>
						<h3>Hello there! My name is</h3>
						<h1>Nirmal Hegde</h1>
					</Grid>
					<Grid item xs={6}>

					</Grid>
				</Grid>
			</Grid>
		</div>
	)
}

export default Home;
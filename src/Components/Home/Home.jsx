// dependancies
import React from 'react'
import { Typography } from '@material-ui/core'
import Typewriter from "typewriter-effect"

// file imports
import HomeStyles from './HomeStyles'

const Home = () => {
	// css import
	const classes = HomeStyles();
	
	return (
		<div id="home" className={classes.size}>
			<div className={classes.title}>
				<div>
					<br />
					<Typography className={classes.titleText} variant="h1">Nirmal Hegde</Typography>
					<div className={classes.inline}>
						<div style={{ display: "inline-block" }}>
							<Typewriter
								options={{
									strings: ['I ♥ Developing', 'Machine that turns Mountain Dew into Code', '"It\'s not a bug, it\'s an undocumented feature!" - Yoda, maybe'],
									autoStart: true,
									loop: true,
									deleteSpeed: 5,
								}}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Home;
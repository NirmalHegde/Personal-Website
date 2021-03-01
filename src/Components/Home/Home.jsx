import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import Typewriter from "typewriter-effect"

import HomeStyles from './HomeStyles'

const Home = () => {
	const classes = HomeStyles();
	return (
		<div id="home" className={classes.size}>
			<div className={classes.title}>
				<div>
					<br />
					<Typography className={classes.titleText} variant="h3">Hello there! My name is</Typography>
					<br />
					<Typography className={classes.titleText} variant="h1">Nirmal Hegde</Typography>
					<div className={classes.inline}>
						<p style={{ display: "inline-block" }}> And I am a&nbsp;</p>
						<div style={{ display: "inline-block" }}>
							<Typewriter
								options={{
									strings: ['Developer', 'Leader', 'Designer'],
									autoStart: true,
									loop: true,
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
import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import Typewriter from "typewriter-effect"

import HomeStyles from './HomeStyles'

const Home = () => {
	const classes = HomeStyles();
	return (
		<div className={classes.size}>
			<Grid container>
				<Grid item xs={1}></Grid>
				<Grid item container xs={10}>
					<Grid item xs={6}>
						<div className={classes.title}>
							<div>
								<br />
								<Typography className={classes.titleText} variant="h3">Hello there! My name is</Typography>
								<br /> 	
								<Typography className={classes.titleText} variant="h1">Nirmal Hegde</Typography>
								<br />
								<div className={classes.inline}>
								<Typography className={classes.titleText} variant="h3">And I am a</Typography>
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
					</Grid>
					<Grid item xs={6}>

					</Grid>
				</Grid>
			</Grid>
		</div>
	)
}

export default Home;
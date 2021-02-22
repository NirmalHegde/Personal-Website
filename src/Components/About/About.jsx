import React from 'react'
import { Grid, Typography } from '@material-ui/core'

import AboutStyles from './AboutStyles'

const About = () => {
	const classes = AboutStyles();
	return (
		<div className={classes.size}>
			<Grid container>
				<Grid className={classes.title} item xs={12}>
					<br />
					<Typography variant="h2">About Me</Typography>
					<Typography variant="h4">~ Who am I? ~</Typography>
				</Grid>
			</Grid>
		</div>
	)
}

export default About;
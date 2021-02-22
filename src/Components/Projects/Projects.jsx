import React from 'react'
import { Grid, Typography } from '@material-ui/core'

import ProjectsStyles from './ProjectsStyles'

const Projects = () => {
	const classes = ProjectsStyles();
	return (
		<div className={classes.size}>
			<Grid container>
				<Grid className={classes.title} item xs={12}>
					<br />
					<Typography variant="h2">My Projects</Typography>
					<Typography variant="h4">~ What have I been working on? ~</Typography>
				</Grid>
			</Grid>
		</div>
	)
}

export default Projects;
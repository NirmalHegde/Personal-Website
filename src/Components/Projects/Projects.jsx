import React from 'react'
import { Grid, Typography, IconButton } from '@material-ui/core'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import ProjectsStyles from './ProjectsStyles'

const Projects = () => {
	const classes = ProjectsStyles();
	return (
		<div id="projects" className={classes.size}>
			<Grid container>
				<Grid className={classes.title} item xs={12}>
					<br />
					<Typography variant="h2">My Projects</Typography>
					<Typography variant="h4">~ What have I been working on? ~</Typography>
				</Grid>
				<Grid item xs={1}></Grid>
				<Grid item xs={1}>
					<div className={classes.buttonContainer}>
						<IconButton aria-label="arrow-left">
							<ArrowBackIcon />
						</IconButton>
					</div>
				</Grid>
				<Grid item container xs={8}>
					<Grid item xs={4}>

					</Grid>
					<Grid item xs={4}>
						
					</Grid>
					<Grid item xs={4}>
						
					</Grid>
				</Grid>
				<Grid item xs={1}>
					<div className={classes.buttonContainer}>
						<IconButton aria-label="arrow-right">
							<ArrowForwardIcon />
						</IconButton>
					</div>
				</Grid>
			</Grid>
		</div>
	)
}

export default Projects;
import React from 'react'

import ProjectsStyles from './ProjectsStyles'

const Projects = () => {
	const classes = ProjectsStyles();
	return (
		<div className={classes.size}>
			<h1>Projects</h1>
		</div>
	)
}

export default Projects;
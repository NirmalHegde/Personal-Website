import React from 'react'
import { Card, CardActionArea, CardContent, CardMedia, CardActions, Typography, Button } from '@material-ui/core'
import ProjectsCardStyles from './ProjectsCardsStyles'

const ProjectsCards = (props) => {
	const { demo, demoTitle, demoDetails, source } = props;

	const classes = ProjectsCardStyles()

	return (
		<Card className={classes.root}>
			<CardActionArea>
				<CardMedia
					component="img"
					alt="Image"
					height="190"
					image={demo}
					title="Image"
				/>
				<CardContent>
					<Typography variant="h4">
						{demoTitle}
					</Typography>
					<Typography variant="body2" component="p">
						{demoDetails}
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions>
				<a rel="noreferrer" target="_blank" href={source}>
					<Button component="p">View Source Code</Button>
				</a>
			</CardActions>
		</Card>

	);
}

export default ProjectsCards;
import React from 'react'
import { Card, CardActionArea, CardContent, CardMedia, CardActions, Typography, Button } from '@material-ui/core'

const ProjectsCards = (props) => {
	const { demo, demoTitle, demoDetails, gitHub } = props;

	return (
		<Card>
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
				<a rel="noreferrer" target="_blank" href={gitHub}>
					<Button component="p">View Source Code</Button>
				</a>
			</CardActions>
		</Card>

	);
}

export default ProjectsCards;